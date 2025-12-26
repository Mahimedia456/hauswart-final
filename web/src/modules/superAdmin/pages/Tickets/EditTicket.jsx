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

export default function TicketEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  // MOCK EXISTING TICKET
  const [form, setForm] = useState({
    title: "Air conditioner not working",
    type: "Corrective",
    category: "HVAC",
    priority: "High",
    organization: "Sunrise Towers LLC",
    property: "Building A",
    unit: "Unit 403",
    asset: "HVAC AC",
    assignTo: "Technician",
    expectedDate: "2025-12-30",
    description: "AC not cooling since morning",
    notes: "Urgent during heatwave",
  });

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="p-8 max-w-6xl">

      <Header
        title={dict.editTicket}
        subtitle={`${dict.ticketId}: ${id}`}
        backLabel={dict.backToTickets}
        onBack={() => navigate("/super-admin/tickets")}
      />

      <Card>
        <Section title={dict.ticketInfo}>
          <Grid>
            <Input label={dict.ticketTitle} value={form.title} onChange={update("title")} />
            <Select label={dict.ticketType} value={form.type} onChange={update("type")} options={["Corrective","Preventive","Emergency"]} />
            <Select label={dict.category} value={form.category} onChange={update("category")} options={["HVAC","Electrical","Plumbing"]} />
            <Select label={dict.priority} value={form.priority} onChange={update("priority")} options={["Low","Medium","High","Critical"]} />
          </Grid>
        </Section>

        <Section title={dict.locationDetails}>
          <Grid>
            <Select label={dict.organization} value={form.organization} onChange={update("organization")} options={["Sunrise Towers LLC","Metro Properties"]} />
            <Select label={dict.property} value={form.property} onChange={update("property")} options={["Building A","Building B"]} />
            <Select label={dict.unitRoom} value={form.unit} onChange={update("unit")} options={["Unit 403","Unit 201"]} />
            <Select label={dict.asset} value={form.asset} onChange={update("asset")} options={["HVAC AC","Fire Alarm"]} />
          </Grid>
        </Section>

        <Section title={dict.assignment}>
          <Grid>
            <Select label={dict.assignTo} value={form.assignTo} onChange={update("assignTo")} options={["Technician","Facility Manager"]} />
            <Input type="date" label={dict.expectedCompletion} value={form.expectedDate} onChange={update("expectedDate")} />
          </Grid>
        </Section>

        <Section title={dict.descriptionNotes}>
          <Grid>
            <Textarea label={dict.description} value={form.description} onChange={update("description")} />
            <Textarea label={dict.internalNotes} value={form.notes} onChange={update("notes")} />
          </Grid>
        </Section>
      </Card>

      <Footer
        submitLabel={dict.saveChanges}
        onCancel={() => navigate("/super-admin/tickets")}
      />
    </div>
  );
}
