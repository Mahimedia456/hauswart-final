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

export default function PropertyEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  // MOCK EXISTING PROPERTY (replace with API later)
  const [form, setForm] = useState({
    name: "Downtown Plaza",
    type: dict.type_commercial,
    address: "123 Main Street, Downtown",
    city: "New York",
    postal: "10001",
    lat: "40.7128",
    lng: "-74.0060",
    size: "12000 sq ft",
    description: "Commercial office building",
    floors: "12",
    units: "84",
    sections: "A, B",
    utilities: "Electricity, Water",
    fm: "John Doe",
    caretakers: "2",
    serviceProviders: "HVAC Co",
    securityTeam: "SecureCorp",
    notes: "High foot traffic area",
  });

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="p-8 max-w-6xl">

      <Header
        title={dict.editProperty}
        subtitle={`${dict.propertyId}: ${id}`}
        backLabel={dict.backToProperties}
        onBack={() => navigate("/super-admin/properties")}
      />

      <Card>
        <Section title={dict.section_propertyInfo}>
          <Grid>
            <Input label={dict.field_propertyName} value={form.name} onChange={update("name")} />
            <Select
              label={dict.field_propertyType}
              value={form.type}
              onChange={update("type")}
              options={[
                dict.type_residential,
                dict.type_commercial,
                dict.type_industrial,
                dict.type_mixed,
              ]}
            />
            <Textarea label={dict.field_address} rows={2} value={form.address} onChange={update("address")} />
            <Select label={dict.field_city} value={form.city} onChange={update("city")} options={["New York","Berlin","Dubai"]} />
            <Input label={dict.field_postal} value={form.postal} onChange={update("postal")} />
            <Input label={dict.field_latitude} value={form.lat} onChange={update("lat")} />
            <Input label={dict.field_longitude} value={form.lng} onChange={update("lng")} />
            <Input label={dict.field_propertySize} value={form.size} onChange={update("size")} />
            <Textarea label={dict.field_description} rows={4} value={form.description} onChange={update("description")} />
          </Grid>
        </Section>

        <Section title={dict.section_building}>
          <Grid>
            <Input label={dict.field_floors} value={form.floors} onChange={update("floors")} />
            <Input label={dict.field_units} value={form.units} onChange={update("units")} />
            <Input label={dict.field_sections} value={form.sections} onChange={update("sections")} />
            <Input label={dict.field_utilities} value={form.utilities} onChange={update("utilities")} />
          </Grid>
        </Section>

        <Section title={dict.section_personnel}>
          <Grid>
            <Select label={dict.field_facilityManager} value={form.fm} onChange={update("fm")} options={["John Doe","Jane Smith"]} />
            <Input label={dict.field_caretakers} value={form.caretakers} onChange={update("caretakers")} />
            <Input label={dict.field_serviceProviders} value={form.serviceProviders} onChange={update("serviceProviders")} />
            <Select label={dict.field_securityTeam} value={form.securityTeam} onChange={update("securityTeam")} options={["SecureCorp"]} />
            <Textarea label={dict.field_notes} rows={2} value={form.notes} onChange={update("notes")} />
          </Grid>
        </Section>
      </Card>

      <Footer
        submitLabel={dict.saveChanges}
        onCancel={() => navigate("/super-admin/properties")}
      />
    </div>
  );
}
