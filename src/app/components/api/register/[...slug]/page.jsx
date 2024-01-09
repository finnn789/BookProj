

const Kategori = ({params}) => {

    console.log(params);
    
    return (
        <div> Barang {params.slug[0]} </div>
    )
}

export default Kategori
