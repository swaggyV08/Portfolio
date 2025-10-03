import { ExternalLink, FileDown } from "lucide-react";

type Props = {
  title: string;
  pdfPath?: string;
  externalUrl?: string;
};

const CertificationBadge = ({ title, pdfPath, externalUrl }: Props) => {
  return (
    <div className="glass rounded-xl p-5 h-full flex flex-col justify-between border border-border/50">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">Verified certificate</p>
      </div>

      <div className="mt-4 flex gap-2 flex-wrap">
        {pdfPath && (
          <a
            href={pdfPath}
            download
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-primary/40 hover:bg-primary hover:text-primary-foreground transition-smooth text-sm"
          >
            <FileDown className="h-4 w-4" />
            Download PDF
          </a>
        )}
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-secondary/40 hover:bg-secondary hover:text-secondary-foreground transition-smooth text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            Open Badge
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationBadge;
    