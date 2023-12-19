import Authentication from "./Authentication";
import DocumentNav from "./DocumentNav";
import OrgFeatures from "./OrgFeatures";
import OrganizationDoc from "./OrganizationDoc";

const DocumentationLayout = () => {
  return (
    <div className='bg-gray-700 text-white w-full overflow-hidden text-white-100'>
      <div className={`sm:px-16  flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <DocumentNav className="border border-blue-600 relative" />
          
            <Authentication />
            <OrganizationDoc />
            <OrgFeatures />
         
        </div>
      </div>
    </div>
  );
}

export default DocumentationLayout