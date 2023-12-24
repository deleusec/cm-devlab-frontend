
interface CardListingProps {
    title?: string;
    children: React.ReactNode;
}

function CardListing(props: CardListingProps) {
    return (
        <div className='px-[50px]'>
            <div className='flex flex-col w-full px-[50px] py-[45px] bg-white rounded-xl'>
                {props.title && <h3 className="mb-16">{props.title}</h3>}
                {props.children}
            </div>
        </div>
    );
}

export default CardListing;