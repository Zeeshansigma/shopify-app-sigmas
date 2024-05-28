import {Card, Layout, Page, Grid,TextField} from "@shopify/polaris";
import { EditIcon} from '@shopify/polaris-icons';
import {Icon} from '@shopify/polaris';
// import   CountrySelector   from "../../components/countrySelector";


const FormDesigner =  () =>{
return (
<Page fullWidth>
<Layout>
    <Layout.Section>
    <h3> Form Designer </h3>
        <Grid>
            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
                <Card>
                <div className="country_selector">
                    <p> Country </p>
                    {/* <CountrySelector/> */}
                </div>
                </Card>
                <Card>
                   <div className="cod_title_settings">
                   <div className="form_cod_title">
                    <p> CASH ON DELIVERY </p>
                <Icon source={EditIcon} tone="base"/>
                    </div>
                        <h6>FORM TITLE</h6>
                        <p>Text</p>

                   </div>
                </Card>
            </Grid.Cell>
        </Grid>
    </Layout.Section>
</Layout>
</Page>
)
}
  export default FormDesigner;