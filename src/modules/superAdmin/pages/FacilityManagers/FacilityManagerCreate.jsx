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
  Textarea,
  Footer,
} from "@/components/ui/FormLayout";

export default function FacilityManagerCreate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="p-8 max-w-6xl">

      <Header
        title={dict.fm_create_title}
        subtitle={dict.fm_create_subtitle}
        backLabel={dict.fm_create_backToList}
        onBack={() => navigate("/super-admin/facility-managers")}
      />

      <Card>
        <Section
          title={dict.fm_create_cardTitle}
          description={dict.fm_create_cardSubtitle}
        >
          <Grid>
            <Input label={dict.fm_create_name_label} />
            <Select
              label={dict.fm_create_industry_label}
              options={[
                dict.fm_create_industry_realEstate,
                dict.fm_create_industry_healthcare,
                dict.fm_create_industry_education,
                dict.fm_create_industry_hospitality,
              ]}
            />
            <Textarea label={dict.fm_create_address_label} />
            <Input label={dict.fm_create_contactName_label} />
            <Input label={dict.fm_create_contactEmail_label} />
            <Input label={dict.fm_create_contactPhone_label} />
            <Select
              label={dict.fm_create_plan_label}
              options={[
                dict.fm_create_plan_basic,
                dict.fm_create_plan_professional,
                dict.fm_create_plan_enterprise,
              ]}
            />
            <Select
              label={dict.fm_create_status_label}
              options={[dict.status_active, dict.status_trial, dict.status_suspended]}
            />
          </Grid>
        </Section>
      </Card>

      <Footer
        onCancel={() => navigate("/super-admin/facility-managers")}
        submitLabel={dict.fm_create_save}
      />
    </div>
  );
}
