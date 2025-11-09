import { Briefcase, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";

import type { Candidate } from "@/types/candidate";

interface CandidateCardProps {
  data: Candidate[];
}

function CandidateCardsList({ data }: CandidateCardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((candidate) => (
        <motion.div
          key={candidate.id}
          whileHover={{
            scale: [null, 1.03],
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <Card className="border-none">
            <CardHeader>
              <CardTitle>{candidate.name}</CardTitle>
              <CardDescription className="text-primary-500">
                @{candidate.username}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-[20px_1fr] gap-2">
                <Briefcase />
                <span className="pl-2">{candidate.company.name}</span>

                <MapPin />
                <span className="pl-2">{candidate.address.city}</span>

                <Phone />
                <span className="pl-2">{candidate.phone}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export { CandidateCardsList };
