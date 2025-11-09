import { Briefcase, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";

import type { Candidate } from "@/types/candidate";
import { Input } from "@base-ui-components/react";
import { Label } from "@/components/label";

interface CandidateCardProps {
  data: Candidate[];
}

function CandidateCardsList({ data }: CandidateCardProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((candidate) => (
        <Dialog key={candidate.id}>
          <DialogTrigger>
            <motion.div
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
                  <CardTitle className="text-secondary text-xl">
                    {candidate.name}
                  </CardTitle>
                  <CardDescription className="text-primary-500">
                    @{candidate.username}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-[20px_1fr] gap-2">
                    <Briefcase color="#4a5565" />
                    <span className="pl-2">{candidate.company.name}</span>

                    <MapPin color="#4a5565" />
                    <span className="pl-2">{candidate.address.city}</span>

                    <Phone color="#4a5565" />
                    <span className="pl-2">{candidate.phone}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{candidate.name}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Label>Email</Label>
                <Input
                  className="w-full border-none"
                  value={candidate.email}
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label>Address</Label>
                <Input
                  className="w-full border-none"
                  value={`${candidate.address.suite}, ${candidate.address.street},${candidate.address.city}`}
                  readOnly
                />
              </div>
              <p className="font-bold text-lg">Company Info</p>
              <div className="flex flex-col space-y-2">
                <Label>Name</Label>
                <Input
                  className="w-full border-none"
                  value={candidate.company.name}
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label>Catchphrase</Label>
                <Input
                  className="w-full border-none"
                  value={candidate.company.catchPhrase}
                  readOnly
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

export { CandidateCardsList };
