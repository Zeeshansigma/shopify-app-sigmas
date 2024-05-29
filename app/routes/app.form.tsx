import {Card, Layout, Page, Grid,Icon } from "@shopify/polaris";
import  { EditIcon } from '@shopify/polaris-icons';
import   CountrySelector   from "../components/CountrySelector";
import DividerBorder from "../components/Divider";
import TextFieldExample from "../components/TitleInput";
import SelectExample from "../components/Alignment";
import RangeSliderFont from "../components/Range";
import Color from "../components/Color"; 
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
                    <CountrySelector/>
                    <DividerBorder/>
                </div>
                </Card>
                <Card>
                   <div className="cod_title_settings">
                   <div className="form_cod_title">
                    <p> CASH ON DELIVERY </p>
                <Card><Icon source={EditIcon} tone="base"/></Card>
                    </div>
                        <div className="cod_inner_content">
                        <h6>FORM TITLE</h6>
                        <TextFieldExample/>
                        <SelectExample label={"Alignment"}/>
                        <RangeSliderFont label={"Font Size"} />
                        <div className="color_swatch">
                        <Color/>
                        </div>
                        </div>
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

