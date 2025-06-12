import { FilterOutlineIcon } from "@/components/ui/icons";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import Button from "@/components/ui/button/Button";
import ButtonIcon from "@/components/ui/button/ButtonIcon";

export default function Buttons() {
  return (
    <div>
      <PageMeta
        title="React.js Buttons Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Buttons Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Buttons" />
      <div className="space-y-5 sm:space-y-6">
        {/* List Button */}
        <ComponentCard title="List Button">
          <div className="flex items-center gap-5">
            <Button size="md" variant="primary">
              Button
            </Button>
            <Button size="md" variant="critical">
              Button
            </Button>
            <Button size="md" variant="secondary">
              Button
            </Button>
            <Button size="md" variant="neutral">
              Button
            </Button>
            <Button size="md" variant="neutral" disabled>
              Button
            </Button>
          </div>
        </ComponentCard>
        {/* List Button */}
        <ComponentCard title="List Button Size">
          <div className="flex items-center gap-5">
            <Button size="sm" variant="primary">
              Button
            </Button>
            <Button size="md" variant="primary">
              Button
            </Button>
            <Button size="lg" variant="primary">
              Button
            </Button>
          </div>
        </ComponentCard>
        {/* Primary Button with Start Icon */}
        <ComponentCard title="List Button Icon">
          <div className="flex items-center gap-5">
            <Button
              size="md"
              variant="primary"
              startIcon={<FilterOutlineIcon size={20} />}
            >
              Button
            </Button>
            <Button
              size="lg"
              variant="primary"
              startIcon={<FilterOutlineIcon size={20} />}
              endIcon={<FilterOutlineIcon size={20} />}
            >
              Button
            </Button>
          </div>
        </ComponentCard>
        <ComponentCard title="List Button Icon">
          <div className="flex items-center gap-5">
            <ButtonIcon
              size="sm"
              variant="primary"
            >
              <FilterOutlineIcon size={16} />
            </ButtonIcon>

            <ButtonIcon
              size="md"
              variant="primary"
            >
              <FilterOutlineIcon size={20} />
            </ButtonIcon>

            <ButtonIcon
              size="lg"
              variant="primary"
            >
              <FilterOutlineIcon size={20} />
            </ButtonIcon>

            <ButtonIcon
              size="lg"
              variant="primary"
              disabled
            >
              <FilterOutlineIcon size={20} />
            </ButtonIcon>
          </div>
        </ComponentCard>

      </div>
    </div>
  );
}
