import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../../context/LanguageContext";
import { t } from "../../../../../i18n/translations";

export default function TenantDetailsTab() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="space-y-6">

      {/* PERSONAL INFORMATION */}
      <Section title={dict.tenant_personalInformation}>
        <InfoGrid>
          <Info label={dict.fullName} value="Jane Doe" />
          <Info label={dict.email} value="jane.doe@email.com" />
          <Info label={dict.dateOfBirth} value="15 Aug 1990" />
          <Info label={dict.phoneNumber} value="+1 234 567 890" />
          <Info label={dict.gender} value="Female" />
          <Info label={dict.secondaryPhone} value="+1 098 765 432" />
          <Info label={dict.nationalId} value="12345-6789012-3" />
          <Info label={dict.emergencyContactName} value="John Doe" />
          <Info
            label={dict.emergencyContactNumber}
            value="+1 123 456 789"
            colStart
          />
        </InfoGrid>

        <Actions>
          <Primary onClick={() => navigate(`/super-admin/tenants/${id}/edit`)}>
            {dict.editInformation}
          </Primary>
          <Secondary>
            {dict.resetAccountPassword}
          </Secondary>
        </Actions>
      </Section>

      {/* TENANCY DETAILS */}
      <Section title={dict.tenancyDetails}>
        <InfoGrid>
          <Info label={dict.tenantType} value="Primary" />
          <Info label={dict.leaseStartDate} value="01 Jan 2023" />
          <Info label={dict.currentStatus} value="Active" />
          <Info label={dict.leaseEndDate} value="31 Dec 2024" />
          <Info label={dict.moveInDate} value="01 Jan 2023" />
          <Info label={dict.rentAmount} value="$2,500 / month" />
          <Info label={dict.moveOutDate} value={dict.notSpecified} muted />
          <Info label={dict.depositAmount} value="$5,000" />
        </InfoGrid>

        <Actions>
          <Secondary onClick={() => navigate(`/super-admin/tenants/${id}/documents`)}>
            {dict.viewLeaseAgreement}
          </Secondary>
          <Primary>
            {dict.editTenancyDetails}
          </Primary>
        </Actions>
      </Section>

      {/* PROPERTY ASSIGNMENT */}
      <Section title={dict.propertyAssignment}>
        <InfoGrid>
          <Info
            label={dict.assignedProperty}
            value="Greenwood Plaza"
            link
            onClick={() => navigate(`/super-admin/properties/1`)}
          />
          <Info label={dict.floorBuilding} value="Building A, 5th Floor" />
          <Info label={dict.assignedUnit} value="Unit 502" />
          <Info label={dict.tenancyTypeLabel} value="Rented" />
        </InfoGrid>

        <Actions>
          <Primary>
            {dict.assignPropertyUnit}
          </Primary>
          <DangerGhost>
            {dict.removeAssignment}
          </DangerGhost>
        </Actions>
      </Section>

      {/* DOCUMENTS */}
      <Section title={dict.documents}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DocCard title={dict.leaseAgreement} status="verified" />
          <DocCard title={dict.nationalId} status="pending" />
          <DocCard title={dict.tenantApplication} status="verified" />
          <DocCard title={dict.additionalDocuments} status="missing" />
        </div>

        <Actions>
          <Secondary onClick={() => navigate(`/super-admin/tenants/${id}/documents`)}>
            {dict.manageAllDocuments}
          </Secondary>
        </Actions>
      </Section>

      {/* ACCOUNT INFORMATION */}
      <Section title={dict.accountInformation}>
        <InfoGrid>
          <Info label={dict.username} value="jane.doe@email.com" />
          <Info label={dict.lastLoginActivity} value="2 hours ago" />
          <Info label={dict.accountCreatedOn} value="01 Jan 2023" />
          <Info label={dict.activeSessions} value="2" />
        </InfoGrid>

        <Actions>
          <Secondary>{dict.manageSessions}</Secondary>
          <Warning>{dict.suspendAccount}</Warning>
          <Danger>{dict.deleteAccountPermanently}</Danger>
        </Actions>
      </Section>

      {/* ADMIN NOTES */}
      <Section title={dict.adminNotes}>
        <Note
          author="John Smith"
          time="Today at 10:45 AM"
          tag={dict.noteGeneral}
          text="Tenant requested information about guest parking policy. Provided details via email."
        />
        <Note
          author="Sarah Jenkins"
          time="Yesterday at 3:30 PM"
          tag={dict.noteWarning}
          text="Late rent payment for the second consecutive month. A formal warning has been issued."
        />
        <Note
          author="John Smith"
          time="3 days ago"
          tag={dict.noteDispute}
          text="Tenant filed a complaint regarding a noise issue from the adjacent unit. Investigating."
        />

        <Actions>
          <Secondary>{dict.viewAllNotes}</Secondary>
          <Primary>{dict.addNewNote}</Primary>
        </Actions>
      </Section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* UI HELPERS                                                                  */
/* -------------------------------------------------------------------------- */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200">
      <h2 className="px-6 py-4 text-lg font-bold border-b border-slate-200">
        {title}
      </h2>
      <div className="p-6 space-y-4">{children}</div>
    </div>
  );
}

function InfoGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {children}
    </div>
  );
}

function Info({ label, value, link, onClick, colStart, muted }) {
  return (
    <div className={`flex flex-col gap-1 ${colStart ? "md:col-start-2" : ""}`}>
      <p className="text-sm text-slate-500">{label}</p>
      {link ? (
        <button
          onClick={onClick}
          className="text-primary text-sm font-medium hover:underline text-left"
        >
          {value}
        </button>
      ) : (
        <p className={`text-sm ${muted ? "text-slate-400" : "text-slate-900"}`}>
          {value}
        </p>
      )}
    </div>
  );
}

function Actions({ children }) {
  return (
    <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
      {children}
    </div>
  );
}

function Primary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 h-10 rounded-lg bg-[#F38B14] text-white font-semibold hover:bg-black"
    >
      {children}
    </button>
  );
}

function Secondary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 font-semibold"
    >
      {children}
    </button>
  );
}

function Warning({ children }) {
  return (
    <button className="px-4 h-10 rounded-lg bg-orange-100 text-orange-600 font-semibold">
      {children}
    </button>
  );
}

function Danger({ children }) {
  return (
    <button className="px-4 h-10 rounded-lg bg-red-100 text-red-600 font-semibold">
      {children}
    </button>
  );
}

function DangerGhost({ children }) {
  return (
    <button className="px-4 h-10 rounded-lg text-red-600 font-semibold hover:bg-red-50">
      {children}
    </button>
  );
}

function DocCard({ title, status }) {
  const statusMap = {
    verified: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    missing: "bg-red-100 text-red-700",
  };

  return (
    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm">{title}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${statusMap[status]}`}>
          {status}
        </span>
      </div>
      <button className="text-primary text-sm font-semibold hover:underline">
        View
      </button>
    </div>
  );
}

function Note({ author, time, tag, text }) {
  return (
    <div className="border-b border-slate-200 pb-4">
      <div className="flex justify-between items-start mb-1">
        <div>
          <p className="font-medium text-sm">{author}</p>
          <p className="text-xs text-slate-500">{time}</p>
        </div>
        <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
          {tag}
        </span>
      </div>
      <p className="text-sm text-slate-700">{text}</p>
    </div>
  );
}
