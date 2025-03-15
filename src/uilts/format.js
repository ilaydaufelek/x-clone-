export const numberFormat= value=>{
    let config={}
    if(value >999 ){
        config={
            notation:'compact',
            maximumFractionDigits:1

        }
    }
    return new Intl.NumberFormat('tr', config).format(value)
}