export type TeamMember = {
  ign: string;
  role: string;
};

export type TeamData = {
  id: string;
  game: string;
  name: string;
  status: string;
  logo: string;
  image: string;
  description: string;
  members: TeamMember[];
};

export const TEAMS: TeamData[] = [
  {
    id: "bgmi",
    game: "BGMI",
    name: "ALVION BGMI",
    status: "Competitive Roster",
    logo: "/images/logos/alvion-mark.svg",
    image: "/images/teams/bgmi-team.svg",
    description:
      "Built for high-pressure lobbies and consistent macro play, the Alvion BGMI roster represents our first competitive chapter.",
    members: [
      { ign: "Player 01", role: "IGL" },
      { ign: "Player 02", role: "Assaulter" },
      { ign: "Player 03", role: "Support" },
      { ign: "Player 04", role: "Entry" },
    ],
  },
];
