import type { Template } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface TemplateSelectorProps {
  templates: Template[];
  onSelect: (template: Template) => void;
}

export default function TemplateSelector({ templates, onSelect }: TemplateSelectorProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Templates</h3>
      <div className="space-y-3">
        {templates.map((template) => (
          <Button
            key={template.id}
            data-testid={`template-${template.category}`}
            onClick={() => onSelect(template)}
            variant="ghost"
            className="w-full text-left p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors justify-start h-auto"
          >
            <div className="flex items-center space-x-3">
              <i className={`${template.icon} text-primary`}></i>
              <div>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {template.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
