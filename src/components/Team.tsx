"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Team.module.css";
import ToggleTypes, { type ToggleLabel } from "./schedule/ToggleTypes";

import { teamMembers, TeamMember, TeamType } from "../data/team";

const teamLabels: Record<TeamType, ToggleLabel> = {
  Leads: {
    background: "bg-blue-900",
    border: "border-blue-900",
    text: "text-blue-900",
  },
  Directors: {
    background: "bg-orange-700",
    border: "border-orange-700",
    text: "text-orange-700",
  },
  Operations: {
    background: "bg-blue-500",
    border: "border-blue-500",
    text: "text-blue-500",
  },
  Finance: {
    background: "bg-green-500",
    border: "border-green-500",
    text: "text-green-500",
  },
  Marketing: {
    background: "bg-red-500",
    border: "border-red-500",
    text: "text-red-500",
  },
  "UI/UX Design": {
    background: "bg-purple-500",
    border: "border-purple-500",
    text: "text-purple-500",
  },
  "Software Engineering": {
    background: "bg-gold-500",
    border: "border-gold-500",
    text: "text-gold-500",
  },
};

const borderColorByTeam: Record<TeamType, string> = {
  Leads: "var(--color-blue-900)",
  Directors: "var(--color-orange-700)",
  Operations: "var(--color-blue-500)",
  Finance: "var(--color-green-500)",
  Marketing: "var(--color-red-500)",
  "UI/UX Design": "var(--color-purple-500)",
  "Software Engineering": "var(--color-gold-500)",
};

const suitByTeam: Partial<Record<TeamType, string>> = {
  Directors: "/team/sigil/orange.svg",
  Operations: "/team/sigil/clubs.svg",
  Finance: "/team/sigil/diamonds.svg",
  "UI/UX Design": "/team/sigil/flower.svg",
  Marketing: "/team/sigil/hearts.svg",
  "Software Engineering": "/team/sigil/spades.svg",
};

const suitShiftByTeam: Partial<Record<TeamType, string>> = {
  Directors: styles.suitOrange,
  Marketing: styles.suitHeart,
};

const keyByTeam: Partial<Record<TeamType, string>> = {
  Directors: "/team/keys/directorKey.svg",
  Operations: "/team/keys/opsKey.svg",
  Finance: "/team/keys/financeKey.svg",
  Marketing: "/team/keys/marketKey.svg",
  "UI/UX Design": "/team/keys/uiKey.svg",
  "Software Engineering": "/team/keys/sweKey.svg",
};

function TeamCard({ member }: { member: TeamMember }) {
  const [borderSvg, setBorderSvg] = useState("");
  const suit = suitByTeam[member.team];
  const key = keyByTeam[member.team];
  const hoverPhoto = member.sillyImage;
  const regPhoto = member.mogImage;

  useEffect(() => {
    fetch("/team/cardBorder.svg")
      .then((r) => r.text())
      .then(setBorderSvg);
  }, []);

  return (
    <a
      className={styles.teamCard}
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={styles.cardFrame}
        style={
          {
            "--border-color": borderColorByTeam[member.team],
          } as React.CSSProperties
        }
      >
        {regPhoto && (<Image
          className={`${styles.cardPhoto} ${styles.cardPhotoReg}`}
          src={regPhoto}
          alt=""
          width={170}
          height={250}
        />)}
        {hoverPhoto && (
          <Image
            className={`${styles.cardPhoto} ${styles.cardPhotoHover}`}
            src={hoverPhoto}
            alt=""
            width={170}
            height={250}
          />
        )}
        <div
          className={styles.cardBorder}
          dangerouslySetInnerHTML={{ __html: borderSvg }}
        />
        <span className={styles.memberPosition}>{member.position}</span>
        <span className={`${styles.memberPosition} ${styles.memberBio}`}>
          {member.bio}
        </span>
        {suit && (
          <Image
            className={`${styles.cardSuit} ${suitShiftByTeam[member.team] ?? ""}`}
            src={suit}
            alt=""
            width={30}
            height={30}
          />
        )}
        {key && (
          <>
            <Image
              className={`${styles.cardKey} ${styles.cardKeyTop}`}
              src={key}
              alt=""
              width={71}
              height={138}
            />
            <Image
              className={`${styles.cardKey} ${styles.cardKeyBottom}`}
              src={key}
              alt=""
              width={71}
              height={138}
            />
          </>
        )}
      </div>

      <span className={styles.memberName}>{member.name}</span>
    </a>
  );
}

const SectionTitle = ({ children }: { children: string }) => (
  <h2
    className="mb-10 flex items-center justify-center gap-6 leading-none"
    style={{ filter: "drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.25))" }}
  >
    <Image
      src="/diamond.svg"
      alt=""
      width={43}
      height={48}
      className="block h-9 w-auto"
      aria-hidden
    />
    <span className="bg-linear-to-b from-white-100 to-orange-500 bg-clip-text text-center font-fraunces text-[22px] font-semibold tracking-normal text-transparent">
      {children}
    </span>
    <Image
      src="/diamond.svg"
      alt=""
      width={43}
      height={48}
      className="block h-9 w-auto"
      aria-hidden
    />
  </h2>
);

export default function Team() {
  const [selectedType, setSelectedType] = useState<TeamType>("Leads");

  const filteredMembers =
    selectedType === "Leads"
      ? teamMembers
      : teamMembers.filter((member) => member.team === selectedType);

  return (
    <section className={styles.teamSection}>
      <SectionTitle>Team</SectionTitle>

      <ToggleTypes
        activeTypes={new Set<TeamType>([selectedType])}
        onToggle={setSelectedType}
        labels={teamLabels}
        className="mb-[18px] flex w-full min-w-0 gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center lg:overflow-visible [&_button]:lg:px-5 lg:px-[16vw] lg:gap-4"
      />

      <div className={styles.teamGrid}>
        {filteredMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
