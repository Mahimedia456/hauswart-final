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
  Textarea,
  Footer,
} from "@/components/ui/FormLayout";

export default function FacilityManagerEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    name: "Metro Property Group",
    industry: "Real Estate",
    address: "456 Business Ave, NY",
    contactName: "Sarah Johnson",
    contactEmail: "sarah@metro.com",
    contactPhone: "+1 555 234 567",
    subscriptionPlan: "Professional",
    status: "Active",
    notes: "Premium client",
  });

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="p-8 max-w-6xl">
      <Header
        title={dict.fm_edit_title}
        subtitle={`${dict.fm_id}: ${id}`}
        backLabel={dict.backToFacilityManagers}
        onBack={() => navigate("/super-admin/facility-managers")}
      />

      <Card>
        <Section title={dict.fm_info}>
          <Grid>
            <Input label={dict.fm_name} value={form.name} onChange={update("name")} />
            <Select
              label={dict.fm_industry}
              value={form.industry}
              onChange={update("industry")}
              options={["Real Estate", "Healthcare", "Education", "Hospitality"]}
            />
            <Textarea label={dict.fm_address} rows={2} value={form.address} onChange={update("address")} />
            <Input label={dict.fm_contact_name} value={form.contactName} onChange={update("contactName")} />
            <Input label={dict.fm_contact_email} value={form.contactEmail} onChange={update("contactEmail")} />
            <Input label={dict.fm_contact_phone} value={form.contactPhone} onChange={update("contactPhone")} />
            <Select
              label={dict.fm_plan}
              value={form.subscriptionPlan}
              onChange={update("subscriptionPlan")}
              options={["Basic", "Professional", "Enterprise"]}
            />
            <Select
              label={dict.status}
              value={form.status}
              onChange={update("status")}
              options={["Active", "Trial", "Suspended"]}
            />
            <Textarea label={dict.notes} rows={2} value={form.notes} onChange={update("notes")} />
          </Grid>
        </Section>
      </Card>

      <Footer
        submitLabel={dict.saveChanges}
        onCancel={() => navigate("/super-admin/facility-managers")}
      />
    </div>
  );
}
