CREATE TABLE IF NOT EXISTS "experience" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company" varchar NOT NULL,
	"role" varchar NOT NULL,
	"content" varchar NOT NULL,
	"start_date" timestamp (6) with time zone NOT NULL,
	"end_date" timestamp (6) with time zone NOT NULL,
	"client_id" uuid NOT NULL,
	"thumbnail_uri" varchar,
	"published" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp (6) with time zone NOT NULL,
	"created_at" timestamp (6) with time zone NOT NULL
);
--> statement-breakpoint
ALTER TABLE "experience" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "experience" ADD CONSTRAINT "experience_client_id_client_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."client"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
