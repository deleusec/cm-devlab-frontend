import { XMarkIcon } from "@heroicons/react/24/outline";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

interface OverlayAppProps {
    show: boolean;
    setShow: (show: boolean) => void;
    children: React.ReactNode;
    title?: string;
    size?: 'small' | 'large';
}

OverlayApp.defaultProps = {
    size: 'large'
}

function OverlayApp(props: OverlayAppProps) {

    const onClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {  
        if (e.target === e.currentTarget) {
            props.setShow(false);
        }
    }

    return (
        <div>
            {props.show && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center cursor-pointer' onClick={onClickOutside}>
                    <div className={`bg-white rounded-xl p-[15px] pr-[2px] cursor-auto min-w-[800px] ${props.size === 'large' && 'w-[80%] h-[80%]'}`}>

                        <OverlayScrollbarsComponent element='div' options={{ scrollbars: { autoHide: 'scroll' } }} defer className='max-h-full pr-[8px]'>
                            <div className="pb-[20px]">
                                <div className='flex justify-end'>
                                    <button className='rounded-full p-2' onClick={() => props.setShow(false)}>
                                        <XMarkIcon className='h-6 w-6 text-secondary' />
                                    </button>
                                </div>
                                <div className="px-[50px]">
                                    <h1 className='text-xl font-semibold mb-6'>{props.title}</h1>
                                    {props.children}
                                </div>
                            </div>
                        </OverlayScrollbarsComponent>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OverlayApp;