import { XMarkIcon } from "@heroicons/react/24/outline";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

interface OverlayAppProps {
    show: boolean;
    setShow: (show: boolean) => void;
    children: React.ReactNode;
}

function OverlayApp(props: OverlayAppProps) {
    return (
        <div>
            {props.show && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='w-[80%] h-[80%] bg-white rounded-xl p-[15px] pr-[2px]'>

                        <OverlayScrollbarsComponent element='div' options={{ scrollbars: { autoHide: 'scroll' } }} defer className='max-h-full pr-[8px]'>
                            <div className="pb-[20px]">
                                <div className='flex justify-end'>
                                    <button className='rounded-full p-2' onClick={() => props.setShow(false)}>
                                        <XMarkIcon className='h-6 w-6 text-secondary' />
                                    </button>
                                </div>

                                {props.children}
                            </div>
                        </OverlayScrollbarsComponent>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OverlayApp;