import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export default function TechnicianEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    fullName: "Alex Johnson",
    email: "alex@hauswart.com",
    phone: "+1 234 567 890",
    organization: "Sunrise Towers LLC",
    status: "Active",
  });

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="p-8 max-w-6xl">
      <Header
        title={dict.tech_edit_title}
        subtitle={`${dict.tech_id}: ${id}`}
        backLabel={dict.backToTechnicians}
        onBack={() => navigate("/facility-manager/technicians")}
      />

      <Card>
        <Section title={dict.tech_info}>
          <Grid>
            <Input label={dict.tech_full_name} value={form.fullName} onChange={update("fullName")} />
            <Input label={dict.tech_email} value={form.email} onChange={update("email")} />
            <Input label={dict.tech_phone} value={form.phone} onChange={update("phone")} />
            <Select
              label={dict.tech_assign_org}
              value={form.organization}
              onChange={update("organization")}
              options={["Sunrise Towers LLC", "Metro Properties"]}
            />
            <Select
              label={dict.tech_status}
              value={form.status}
              onChange={update("status")}
              options={["Active", "Inactive", "Suspended"]}
            />
          </Grid>
        </Section>
      </Card>

      <Footer
        submitLabel={dict.saveChanges}
        onCancel={() => navigate("/facility-manager/technicians")}
      />
    </div>
  );
}
