import { Page, Text, View, Document, PDFViewer } from '@react-pdf/renderer';
import {styles } from './style';



export default function  MyDocument(){
  
function  MyPDF(){

    return (<>
    
 <Document>
<Page size="A4" style={styles.page}>

      <View style={styles.section}>
        <Text>ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ</Text>
        <Text>ສັນຕິພາບ ເອກະລາດ ປະຊາທິປະໄຕ ເອກະພາບ ວັດທະນະຖາວອນ</Text>
        
      </View>


      <View style={styles.section}>
        <Text>ວັນທີ</Text>
      </View>
    </Page>
  </Document>
        </>
    )
  } 
return (<> 
  <PDFViewer width="100%" height="100%">

<MyPDF/>

  </PDFViewer> 

</>)
}
