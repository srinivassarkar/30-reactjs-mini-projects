import { useLocalization } from "./LocalizationContext"

function TwentySix() {

     const {locale, setLocale,translate} = useLocalization()


 const handleLocaleChange = (newLocale)=>{
    setLocale(newLocale)
    
 }
console.log(locale)
  return (
    <div>
    <h1>{translate('greeting')}</h1>
    <h1>{translate('welcome')}</h1>
        <button onClick={()=> handleLocaleChange('en')}>English</button>
        <button onClick={()=> handleLocaleChange('hi')}>हिंदी</button>
    </div>
  )
}

export default TwentySix