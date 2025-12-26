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

export default function TechnicianCreate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="p-8 max-w-6xl">

      <Header
        title={dict.technician_create_title}
        subtitle={dict.technician_create_subtitle}
        backLabel={dict.back_to_technicians}
        onBack={() => navigate("/super-admin/technicians")}
      />

      <Card>
        <Section title={dict.tech_info_title}>
          <Grid>
            <Input label={dict.tech_full_name} />
            <Input label={dict.tech_email} />
            <Input label={dict.tech_phone} />
            <Input type="password" label={dict.tech_password} />
            <Input type="password" label={dict.tech_confirm_password} />
          </Grid>
        </Section>

        <Section title={dict.tech_access_title}>
          <Grid>
            <Select
              label={dict.tech_assign_org}
              options={[
                "Global Real Estate Inc.",
                "Metro Property Group",
              ]}
            />
            <Select
              label={dict.tech_status}
              options={[
                dict.status_active,
                dict.status_suspended,
              ]}
            />
          </Grid>
        </Section>
      </Card>

      <Footer
        onCancel={() => navigate("/super-admin/technicians")}
        submitLabel={dict.action_create_technician}
      />
    </div>
  );
}
