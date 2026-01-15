import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

import {
  Header,
  Card,
  Section,
  Grid,
  Input,
  Select,
  Footer,
} from "@/components/ui/FormLayout";

export default function AddTenant() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="p-8 max-w-6xl">

      <Header
        title={dict.add_new_tenant}
        subtitle={dict.add_tenant_subtitle}
        backLabel={dict.tenants_list}
        onBack={() => navigate("/facility-manager/tenants")}
      />

      <Card>
        <Section title={dict.personal_information}>
          <Grid>
            <Input label={dict.full_name} />
            <Input label={dict.email_address} />
            <Input label={dict.phone_number} />
            <Select
              label={dict.gender}
              options={[dict.male, dict.female, dict.other]}
            />
          </Grid>
        </Section>

        <Section title={dict.tenancy_details}>
          <Grid>
            <Select
              label={dict.tenant_type}
              options={[dict.primary, dict.co_tenant, dict.family_member]}
            />
            <Input type="date" label={dict.lease_start_date} />
            <Input type="date" label={dict.lease_end_date} />
          </Grid>
        </Section>

        <Section title={dict.property_assignment}>
          <Grid>
            <Select label={dict.select_property} options={["Building A"]} />
            <Select label={dict.select_unit} options={["Unit 101"]} />
          </Grid>
        </Section>
      </Card>

      <Footer
        onCancel={() => navigate("/facility-manager/tenants")}
        submitLabel={dict.create_tenant}
      />
    </div>
  );
}
