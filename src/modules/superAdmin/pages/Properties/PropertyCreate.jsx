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

export default function PropertyCreate() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const [form, setForm] = useState({
    name: "",
    type: "",
    address: "",
    city: "",
    postal: "",
    lat: "",
    lng: "",
    size: "",
    description: "",
    floors: "",
    units: "",
    sections: "",
    utilities: "",
    fm: "",
    caretakers: "",
    serviceProviders: "",
    securityTeam: "",
    notes: "",
  });

  const update = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div className="p-8 max-w-6xl">

      <Header
        title={dict.createProperty}
        subtitle={dict.createPropertySubtitle}
        backLabel={dict.backToProperties}
        onBack={() => navigate("/super-admin/properties")}
      />

      <Card>
        {/* BASIC INFO */}
        <Section
          title={dict.section_propertyInfo}
          description={dict.section_propertyInfo_sub}
        >
          <Grid>
            <Input
              label={dict.field_propertyName}
              placeholder={dict.placeholder_propertyName}
              value={form.name}
              onChange={update("name")}
            />

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

            <Textarea
              label={dict.field_address}
              rows={2}
              placeholder={dict.placeholder_address}
              value={form.address}
              onChange={update("address")}
            />

            <Select
              label={dict.field_city}
              value={form.city}
              onChange={update("city")}
              options={["New York", "Berlin", "Dubai"]}
            />

            <Input
              label={dict.field_postal}
              value={form.postal}
              onChange={update("postal")}
            />

            <Input
              label={dict.field_latitude}
              value={form.lat}
              onChange={update("lat")}
            />

            <Input
              label={dict.field_longitude}
              value={form.lng}
              onChange={update("lng")}
            />

            <Input
              label={dict.field_propertySize}
              value={form.size}
              onChange={update("size")}
            />

            <Textarea
              label={dict.field_description}
              rows={4}
              value={form.description}
              onChange={update("description")}
            />
          </Grid>
        </Section>

        {/* BUILDING STRUCTURE */}
        <Section title={dict.section_building}>
          <Grid>
            <Input
              label={dict.field_floors}
              value={form.floors}
              onChange={update("floors")}
            />

            <Input
              label={dict.field_units}
              value={form.units}
              onChange={update("units")}
            />

            <Input
              label={dict.field_sections}
              placeholder={dict.optional}
              value={form.sections}
              onChange={update("sections")}
            />

            <Input
              label={dict.field_utilities}
              placeholder={dict.optional}
              value={form.utilities}
              onChange={update("utilities")}
            />
          </Grid>
        </Section>

        {/* PERSONNEL */}
        <Section title={dict.section_personnel}>
          <Grid>
            <Select
              label={dict.field_facilityManager}
              value={form.fm}
              onChange={update("fm")}
              options={["John Doe", "Jane Smith"]}
            />

            <Input
              label={dict.field_caretakers}
              value={form.caretakers}
              onChange={update("caretakers")}
            />

            <Input
              label={dict.field_serviceProviders}
              value={form.serviceProviders}
              onChange={update("serviceProviders")}
            />

            <Select
              label={dict.field_securityTeam}
              value={form.securityTeam}
              onChange={update("securityTeam")}
              options={["SecureCorp"]}
            />

            <Textarea
              label={dict.field_notes}
              rows={2}
              value={form.notes}
              onChange={update("notes")}
            />
          </Grid>
        </Section>
      </Card>

      <Footer
        onCancel={() => navigate("/super-admin/properties")}
        submitLabel={dict.saveProperty}
      />
    </div>
  );
}
