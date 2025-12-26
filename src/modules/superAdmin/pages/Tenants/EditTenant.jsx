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

export default function EditTenant() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    fullName: "Olivia Rhye",
    email: "olivia@hauswart.com",
    phone: "+1 222 333 444",
    tenantType: "Primary",
    status: "Active",
    moveIn: "2023-08-15",
  });

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="p-8 max-w-6xl">
      <Header
        title={dict.editTenant}
        subtitle={`${dict.tenant_id}: ${id}`}
        backLabel={dict.backToTenants}
        onBack={() => navigate("/super-admin/tenants")}
      />

      <Card>
        <Section title={dict.personal_information}>
          <Grid>
            <Input label={dict.full_name} value={form.fullName} onChange={update("fullName")} />
            <Input label={dict.email_address} value={form.email} onChange={update("email")} />
            <Input label={dict.phone_number} value={form.phone} onChange={update("phone")} />
            <Select
              label={dict.tenant_type}
              value={form.tenantType}
              onChange={update("tenantType")}
              options={[dict.primary, dict.co_tenant, dict.family_member]}
            />
            <Select
              label={dict.account_status}
              value={form.status}
              onChange={update("status")}
              options={[dict.active, dict.pending, dict.suspended]}
            />
            <Input type="date" label={dict.move_in_date} value={form.moveIn} onChange={update("moveIn")} />
          </Grid>
        </Section>
      </Card>

      <Footer
        submitLabel={dict.saveChanges}
        onCancel={() => navigate("/super-admin/tenants")}
      />
    </div>
  );
}
