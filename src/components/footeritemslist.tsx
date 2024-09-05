
interface footerItemsListModel{
    title: string, list: Array<string>
}


function FooterItemsList({title ,list}:footerItemsListModel) {
    return (
        <div className="flex flex-col gap-3 text-white justify-center">
            <p className="font-bold">{title}</p>
            {list.map((item) => (
                <p className="text-gray-400 cursor-pointer hover:text-gray-100">{item}</p>
            ))}
        </div>
    )
}


export default FooterItemsList
