import { useState } from "react";
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

export default function TicketCreate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    title: "",
    type: "Corrective",
    category: "",
    requestedBy: "Tenant",
    priority: "Low",
    source: "Mobile App",
    organization: "",
    property: "",
    unit: "",
    asset: "",
    assignTo: "",
    expectedDate: "",
    description: "",
    notes: "",
  });

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="p-8 max-w-6xl">

      <Header
        title={dict.ticketCreate}
        subtitle={dict.ticketCreateDesc}
        backLabel={dict.backToTickets}
        onBack={() => navigate("/super-admin/tickets")}
      />

      <Card>
        {/* TICKET INFO */}
        <Section title={dict.ticketInfo}>
          <Grid>
            <Input
              label={dict.ticketTitle}
              value={form.title}
              onChange={update("title")}
            />

            <Select
              label={dict.ticketType}
              value={form.type}
              onChange={update("type")}
              options={[
                "Corrective",
                "Preventive",
                "Inspection",
                "Emergency",
              ]}
            />

            <Select
              label={dict.category}
              value={form.category}
              onChange={update("category")}
              options={["Electrical", "HVAC", "Plumbing", "Safety"]}
            />

            <Select
              label={dict.priority}
              value={form.priority}
              onChange={update("priority")}
              options={["Low", "Medium", "High", "Critical"]}
            />
          </Grid>
        </Section>

        {/* LOCATION */}
        <Section title={dict.locationDetails}>
          <Grid>
            <Select
              label={dict.organization}
              value={form.organization}
              onChange={update("organization")}
              options={["Sunrise Towers LLC", "Metro Properties"]}
            />

            <Select
              label={dict.property}
              value={form.property}
              onChange={update("property")}
              options={["Building A", "Building B"]}
            />

            <Select
              label={dict.unitRoom}
              value={form.unit}
              onChange={update("unit")}
              options={["Unit 101", "Unit 201"]}
            />

            <Select
              label={dict.asset}
              value={form.asset}
              onChange={update("asset")}
              options={["HVAC", "Fire Alarm", "Water Pump"]}
            />
          </Grid>
        </Section>

        {/* ASSIGNMENT */}
        <Section title={dict.assignment}>
          <Grid>
            <Select
              label={dict.assignTo}
              value={form.assignTo}
              onChange={update("assignTo")}
              options={[
                "Technician",
                "Facility Manager",
                "Service Provider",
              ]}
            />

            <Input
              type="date"
              label={dict.expectedCompletion}
              value={form.expectedDate}
              onChange={update("expectedDate")}
            />
          </Grid>
        </Section>

        {/* DESCRIPTION */}
        <Section title={dict.descriptionNotes}>
          <Grid>
            <Textarea
              label={dict.description}
              value={form.description}
              onChange={update("description")}
            />

            <Textarea
              label={dict.internalNotes}
              value={form.notes}
              onChange={update("notes")}
            />
          </Grid>
        </Section>
      </Card>

      <Footer
        onCancel={() => navigate("/super-admin/tickets")}
        submitLabel={dict.createTicketsButton}
      />
    </div>
  );
}
