// Designer_Drift — Content Data File (French)
// src/data/scenarios.fr.js
// Version 2.0 — April 2026
//
// Structure identical to scenarios.js.
// Slugs, field names, medallion values, and interview quotes are unchanged.
// Only user-facing string content is translated.

const scenariosFr = [

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 1 — EXPERTISE BYPASS
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-1",
    slug: "expertise-bypass",
    scenarioTitle: "L'expertise mise de côté",
    label: "SITUATION",
    title: "Si mon travail ne compte pas, est-ce que je compte encore ?",
    trigger: "Vous n'étiez pas à la réunion. Les décisions ont été prises. On attend de vous que vous exécutiez.",
    bodyText: [
      {
        type: "paragraph",
        text: "Je n'ai pas été invité(e) à la réunion de design. On attend de moi que je mette en œuvre des décisions prises sans moi. Je suis l'UX designer du projet."
      },
      {
        type: "paragraph",
        text: "J'ai acquis des compétences de UX designer. Il s'agit d'une acquisition. Mon identité n'est pas déterminée par les objets ou les compétences que j'acquiers. Par conséquent, l'affirmation « Je suis un UX designer » est fausse. « J'ai des compétences de UX designer ». L'entreprise m'embauche pour mettre à profit ces compétences. C'est le choix de l'entreprise d'optimiser ce pour quoi elle paie. Cela ne reflète en rien ma valeur en tant que concepteur, ni même en tant qu'être humain."
      },
      {
        type: "paragraph",
        text: "Au cours de mon perfectionnement, l'outil est devenu un rôle. L'engagement émotionnel a flouté la frontière. Le rôle est devenu un territoire à protéger et à défendre."
      },
      {
        type: "pull-quote",
        text: "Désormais, la stabilité interne dépend de la reconnaissance de mon travail. C'est ainsi que je deviens l'otage des décisions d'autrui."
      },
      {
        type: "illustration-paragraph",
        text: "Je suis un singe, j'ai cette tasse. Je l'aime bien. Je m'en sers pour boire l'eau de la rivière toute proche. Elle est pratique. D'autres singes empruntent cette tasse. Qu'ils l'utilisent ou non, c'est leur choix. Cela ne remet pas en question qui je suis. J'étais là avant la tasse, j'étais là quand la tasse n'était pas utilisée, et je serai là après la tasse.",
        medallion: "Medaillon_Scenario1"
      },
      {
        type: "pull-quote",
        text: "Vais-je laisser ce que j'ai définir ce que je suis ?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCES",
        heading: "Ce qui se passe dans votre cerveau",
        content: [
          { type: "pill", text: "Cœur qui bat la chamade" },
          { type: "pill", text: "Corps tendu" },
          { type: "pill", text: "Colère" },
          { type: "pill", text: "Sentiment d'impuissance" },
          { type: "pill", text: "Invisible" },
          { type: "pill", text: "Petit(e)" },
          {
            type: "neuroscience-card",
            title: "Votre cerveau interprète l'exclusion comme un danger",
            highlightLabel: "DOULEUR SOCIALE = DOULEUR PHYSIQUE",
            highlightBody: "Les mêmes circuits de la douleur qui s'activent lors d'une blessure physique se déclenchent aussi lorsque vous êtes écarté(e) professionnellement."
          },
          {
            type: "neuroscience-card",
            title: "L'alarme se déclenche",
            highlightLabel: "ATTENTE ≠ RÉALITÉ",
            highlightBody: "Le système d'alarme de votre cerveau (le cortex cingulaire antérieur) se déclenche dès que le résultat attendu ne correspond pas à la réalité."
          },
          {
            type: "neuroscience-card",
            title: "« À quoi bon ? » n'est pas de la paresse",
            highlightLabel: "CIRCUIT DE RÉCOMPENSE ROMPU",
            highlightBody: "La dopamine alimente la motivation par l'anticipation d'une récompense : faire des efforts, s'attendre à une reconnaissance, aller de l'avant. Lorsque votre expertise est systématiquement rejetée, ce cycle se brise."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "VOUS N'ÊTES PAS SEUL(E)",
        heading: "Ce qu'en disent d'autres designers",
        content: [
          { type: "quote", text: "« Je voulais fermer l'ordinateur. »" },
          { type: "quote", text: "« Plus rien à faire pour ce projet. »" },
          { type: "quote", text: "« Pas de mots sur le moment, je ne savais pas comment réagir ! »" },
          { type: "strategy", action: "Se confier à des collègues ou à des amis", thought: "« Ils sont injustes. N'importe qui se sentirait mis à l'écart dans cette situation. »" },
          { type: "strategy", action: "Répliquer ou présenter davantage de preuves", thought: "« Si je l'explique mieux, ils en verront la valeur. »" },
          { type: "strategy", action: "Prendre du recul — aller se promener, manger un morceau, écouter de la musique", thought: "« J'ai juste besoin de distance pour que ça ne m'affecte pas. »" },
          { type: "strategy", action: "Se détacher émotionnellement du projet", thought: "« Très bien. Je vais cesser de m'en soucier pour ne pas souffrir. »" },
          { type: "strategy", action: "Chercher de petites victoires ailleurs pour reprendre le contrôle", thought: "« Si mon travail n'est pas valorisé ici, je ferai mes preuves ailleurs. »" },
          { type: "paragraph", text: "Ces stratégies fonctionnent sur le moment, mais seulement sur le moment. Le schéma se répète car aucune d'entre elles ne s'attaque à la source du problème." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 2 — EXCLUSION FROM STRATEGIC DECISIONS
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-2",
    slug: "strategic-exclusion",
    scenarioTitle: "Écarté(e) des décisions stratégiques",
    label: "SITUATION",
    title: "Ma voix ne fait pas partie des décisions.",
    trigger: "Vous faites le travail, mais vous n'êtes pas dans la pièce où il se construit. On vous informe de ce qui a été décidé, pas pourquoi.",
    bodyText: [
      {
        type: "paragraph",
        text: "Les discussions stratégiques fondamentales — KPIs, priorités, décisions. Je ne suis pas consulté(e). J'en entends parler après coup."
      },
      {
        type: "paragraph",
        text: "Je maîtrise le Discovery, j'ai une vision claire du produit et une feuille de route bien établie. La stratégie fait partie de mon arsenal UX depuis longtemps."
      },
      {
        type: "paragraph",
        text: "Je pratique déjà la réflexion stratégique. Que l'on me voie le faire ou non n'a aucune importance."
      },
      {
        type: "paragraph",
        text: "Mais lorsque je ne suis pas officiellement invité(e) à une réunion stratégique, je me sens exclu(e). Cette invitation aurait confirmé ma position. Mais la blessure est bien réelle. La validation devient plus importante que le travail lui-même."
      },
      {
        type: "paragraph",
        text: "L'écosystème m'a discrètement appris ce qui compte comme progrès. Les intervenants lors des conférences sont présentés comme des « leaders stratégiques ». Les descriptions de poste associent la stratégie à l'ancienneté."
      },
      {
        type: "pull-quote",
        text: "J'ai cessé de me juger sur la qualité de ma réflexion. J'ai commencé à me juger sur les salles dans lesquelles j'étais invité(e)."
      },
      {
        type: "illustration-paragraph",
        text: "Je suis un renard. Autour de moi, tout le monde disait que les oiseaux étaient la cible — visibles, célébrés, ils se rassemblent en volées, ils volent ensemble, on les voit bouger. Les oiseaux se sont envolés. Le renard chasse seul, au sol, invisible, le nez collé à la terre. Le renard n'a pas besoin d'être dans la volée pour chasser.",
        medallion: "Medaillon_Scenario2"
      },
      {
        type: "pull-quote",
        text: "Le titre est-il plus important que le travail ?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCES",
        heading: "Ce qui se passe dans votre cerveau",
        content: [
          { type: "pill", text: "Sensation d'oppression thoracique" },
          { type: "pill", text: "Mâchoires serrées" },
          { type: "pill", text: "Frustration" },
          { type: "pill", text: "Résignation" },
          { type: "pill", text: "Sentiment d'impuissance" },
          { type: "pill", text: "Fatigue" },
          {
            type: "neuroscience-card",
            title: "Se retrouver mis(e) à l'écart est perçu comme une blessure",
            highlightLabel: "MISE À L'ÉCART = BLESSURE SOCIALE",
            highlightBody: "Le fait d'être relégué(e) au simple rôle d'exécuteur active les mêmes circuits de la douleur qu'une blessure physique."
          },
          {
            type: "neuroscience-card",
            title: "L'alarme de statut",
            highlightLabel: "ATTENTES ≠ RÉALITÉ",
            highlightBody: "L'écart entre le rôle attendu et le positionnement réel déclenche le système de détection des menaces de votre cerveau."
          },
          {
            type: "neuroscience-card",
            title: "Piégé(e) dans des responsabilités sans contrôle",
            highlightLabel: "IMPUISSANCE ACQUISE",
            highlightBody: "Lorsque les efforts n'ont systématiquement aucun impact sur les résultats, le cerveau cesse d'essayer d'influencer la situation."
          },
          {
            type: "neuroscience-card",
            title: "La boucle qui ne s'arrête pas",
            highlightLabel: "BOUCLE NON RÉSOLUE",
            highlightBody: "Le réseau par défaut repasse en boucle les menaces sociales non résolues, épuisant votre énergie sans apporter de réponses. « Pourquoi n'ai-je pas été inclus(e) ? Qu'est-ce que cela signifie à mon sujet ? » Ces questions tournent en boucle, vous épuisant même lorsque vous n'avez pas beaucoup travaillé."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "VOUS N'ÊTES PAS SEUL(E)",
        heading: "Ce qu'en disent d'autres designers",
        content: [
          { type: "quote", text: "« Plus rien à faire pour ce projet. »" },
          { type: "quote", text: "« S'ils veulent se passer de moi, ils le feront. »" },
          { type: "strategy", action: "Faire valoir son point de vue auprès du PO/PM", thought: "« Si je m'affirme, ils reconnaîtront que j'ai ma place à ce niveau. »" },
          { type: "strategy", action: "Se comparer aux autres designers", thought: "« Ils ont une longueur d'avance. Je suis à la traîne. Une autre entreprise saura me valoriser à ma juste valeur. »" },
          { type: "strategy", action: "Se confier à d'autres designers", thought: "« Ils ne valorisent pas le design au niveau stratégique. Le système est défaillant. »" },
          { type: "strategy", action: "Se détacher émotionnellement", thought: "« Très bien, je me contenterai d'exécuter ce qu'ils décident. »" },
          { type: "strategy", action: "Chercher de petites victoires ailleurs", thought: "« Si je ne peux pas être stratégique ici, j'aurai mon importance ailleurs. »" },
          { type: "paragraph", text: "Ces stratégies apportent un soulagement à court terme, mais chacune porte en elle le même espoir tacite : si je prouve ma valeur, je serai inclus(e) la prochaine fois. Lorsque l'inclusion ne se concrétise pas, le doute revient." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 3 — AUTHORITY OVERRIDES EXPERTISE
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-3",
    slug: "authority-override",
    scenarioTitle: "L'autorité l'emporte sur l'expertise",
    label: "SITUATION",
    title: "Je contrôle le travail ainsi que son résultat.",
    trigger: "Vous avez apporté des preuves. Ils ont apporté la hiérarchie. La décision était déjà prise avant que vous preniez la parole.",
    bodyText: [
      {
        type: "paragraph",
        text: "Lors d'une réunion de validation, j'ai présenté des arguments solides : études utilisateurs, données, points faibles clairement identifiés. J'ai rassemblé des éléments probants pour étayer mon propos. Mais la décision vient toujours d'en haut. La hiérarchie l'emporte sur la discussion."
      },
      {
        type: "pull-quote",
        text: "Mon engagement porte sur le travail. Pas sur le résultat."
      },
      {
        type: "paragraph",
        text: "Toute mon attention était concentrée sur la manière de communiquer les insights et de comprendre les objectifs commerciaux de la manière la plus impartiale et la plus claire possible. Les traduire en solutions, voilà le travail."
      },
      {
        type: "paragraph",
        text: "Au fil du temps, ma responsabilité vis-à-vis du travail s'est discrètement étendue au résultat de ce travail. L'objectif s'est discrètement déplacé de la compréhension du problème vers le fait d'amener les autres à agir. Ma valeur est devenue intrinsèquement liée au résultat de mon travail."
      },
      {
        type: "illustration-paragraph",
        text: "Je suis un Shiba Inu. J'adore jouer. Le bâton est l'un de mes moyens de jouer. Un jour, alors que je jouais, le bâton est tombé dans la rivière et le courant l'a emporté dans une autre direction. J'ai sauté à l'eau pour le rattraper. Le jeu s'est arrêté. Le bâton n'a jamais été le jeu.",
        medallion: "Medaillon_Scenario3"
      },
      {
        type: "pull-quote",
        text: "Est-ce que j'aimais vraiment jouer ?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCES",
        heading: "Ce qui se passe dans votre cerveau",
        content: [
          { type: "pill", text: "Corps tendu" },
          { type: "pill", text: "Colère" },
          { type: "pill", text: "Mépris" },
          { type: "pill", text: "Provoqué(e)" },
          { type: "pill", text: "Irritation" },
          { type: "pill", text: "Agitation" },
          {
            type: "neuroscience-card",
            title: "L'alarme se déclenche",
            highlightLabel: "ATTENTES BAFOUÉES = BLESSURE PHYSIQUE",
            highlightBody: "Le système d'alarme de votre cerveau (le cortex cingulaire antérieur) détecte le décalage : vous vous attendez à ce que la compétence et les preuves déterminent les résultats. Ce qui se passe à la place : la hiérarchie décide en premier."
          },
          {
            type: "neuroscience-card",
            title: "Erreur de prédiction de la dopamine",
            highlightLabel: "BAISSE DE DOPAMINE = « À QUOI BON ? »",
            highlightBody: "Lorsque la vérité ne parvient jamais à s'imposer, le cerveau cesse d'anticiper une récompense à la suite d'un effort."
          },
          {
            type: "neuroscience-card",
            title: "La boucle d'attente",
            highlightLabel: "RUPTURE DU LIEN ENTRE L'ACTION ET LE RÉSULTAT",
            highlightBody: "Votre cerveau ne se contente pas d'enregistrer que « les preuves ont été ignorées ». Il enregistre : « J'ai fait X en m'attendant à Y, et Y ne s'est pas produit. »"
          },
          {
            type: "neuroscience-card",
            title: "Perte de contrôle et de prévisibilité",
            highlightLabel: "PERTE DE CONTRÔLE + PERTE DE PRÉVISIBILITÉ",
            highlightBody: "Le contrôle est perdu lorsque les preuves n'ont aucun impact. La prévisibilité est perdue lorsque les décisions sont dictées par le pouvoir plutôt que par la raison. Cette combinaison maintient le système nerveux dans un état de stress prolongé."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "VOUS N'ÊTES PAS SEUL(E)",
        heading: "Ce qu'en disent d'autres designers",
        content: [
          { type: "quote", text: "« Quel con ! »" },
          { type: "quote", text: "« Tu me challenges dans mon domaine?! »" },
          { type: "quote", text: "« Il utilise sa position pour imposer ses idées. »" },
          { type: "strategy", action: "Argumenter avec plus de force", thought: "« Je vais apporter plus de données, plus de recherches, une logique plus rigoureuse. »" },
          { type: "strategy", action: "Escalader intellectuellement", thought: "« Laisse-moi t'expliquer pourquoi c'est faux. »" },
          { type: "strategy", action: "Moraliser la situation", thought: "« C'est trompeur. C'est mauvais pour les utilisateurs. »" },
          { type: "strategy", action: "Attaquer la compétence", thought: "« Tu ne comprends rien à ce domaine. »" },
          { type: "strategy", action: "Utiliser le sarcasme ou la provocation", thought: "« Bien sûr, si c'est ce que tu veux. »" },
          { type: "strategy", action: "Se plier en apparence", thought: "« D'accord, d'accord. » — tout en étant en désaccord intérieurement." },
          { type: "strategy", action: "Se défouler intensément après coup", thought: "Repasser la scène en revue, chercher des alliés pour confirmer que l'on a raison." },
          { type: "paragraph", text: "Ces stratégies préservent une seule conviction : « Si je m'y prends mieux, ça marchera la prochaine fois. » Mais les efforts et les décisions ne sont pas liés comme on le croit. C'est le pouvoir qui décide. Les preuves sont facultatives. La collision se répète." }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 4 — OPAQUE EVALUATION
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-4",
    slug: "opaque-evaluation",
    scenarioTitle: "Évaluation vague",
    label: "SITUATION",
    title: "Pour l'instant, je n'y suis pas parvenu(e), mais le succès est ailleurs, plus loin.",
    trigger: "Vous ne savez pas à quoi ressemble la réussite ici. Les critères bougent et personne ne vous dit où ils se trouvent.",
    bodyText: [
      {
        type: "paragraph",
        text: "On me reproche, on m'accuse de faible productivité, on me refuse un poste. L'incertitude plane : on ne m'a donné aucune raison, aucune feuille de route, aucun repère pour évaluer mes progrès."
      },
      {
        type: "paragraph",
        text: "J'ai interprété le verdict des autres comme une preuve que je suis en situation d'échec."
      },
      {
        type: "pull-quote",
        text: "Le rejet, les reproches, le silence… Quoi que le monde extérieur me réserve, ce ne sont que des événements. La manière dont ils affectent mon monde intérieur est ma décision souveraine."
      },
      {
        type: "paragraph",
        text: "La question ici n'est pas de savoir si ces événements sont justes ou injustes. La question qui mérite d'être posée est : pourquoi je les prends comme critères pour déterminer si je réussis ou non ? Ces critères que j'ai intériorisés, d'où viennent-ils ? De l'école, du marché du travail, de la société à travers les films, les clips musicaux, les réseaux sociaux."
      },
      {
        type: "illustration-paragraph",
        text: "Je suis un martin-pêcheur. Le poisson sous mon bec — cet instant, ce travail — est réel. Mais on m'a dit que la prise exceptionnelle se trouvait là-bas, quelque part devant moi. Alors je scrute l'horizon et je passe à côté de ce qui m'appartient déjà.",
        medallion: "Medaillon_Scenario4"
      },
      {
        type: "pull-quote",
        text: "Ton esprit t'appartient, c'est un lieu sacré. Le laisseras-tu souiller par les chaussures sales des autres ?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCES",
        heading: "Ce qui se passe dans votre cerveau",
        content: [
          { type: "pill", text: "Tension" },
          { type: "pill", text: "Bloqué(e)" },
          { type: "pill", text: "Coincé(e)" },
          { type: "pill", text: "Angoisse du dimanche" },
          { type: "pill", text: "Insomnie" },
          { type: "pill", text: "Dans le brouillard" },
          {
            type: "neuroscience-card",
            title: "Ce brouillard n'est pas une métaphore",
            highlightLabel: "INCERTITUDE = COÛT PHYSIOLOGIQUE",
            highlightBody: "Lorsque vous vous attendez à un chemin clair et qu'il n'y en a pas, le système nerveux reste en état d'hypervigilance. Il ne peut pas se calmer car la question « Est-ce que j'avance ? » reste sans réponse."
          },
          {
            type: "neuroscience-card",
            title: "L'alarme qui ne s'arrête pas",
            highlightLabel: "PAS DE RÉPONSE À « QU'EST-CE QUI NE VA PAS ? »",
            highlightBody: "Le cerveau dispose d'un système d'alarme (le cortex cingulaire antérieur) qui détecte les décalages entre les attentes et la réalité. Lorsque la valeur est liée à une validation future, l'alarme ne trouve jamais de réponse et ne s'arrête jamais."
          },
          {
            type: "neuroscience-card",
            title: "L'effort sans retour d'information brise la motivation",
            highlightLabel: "BAISSE DE DOPAMINE = VIE DIFFÉRÉE",
            highlightBody: "Le cerveau ne maintient pas la motivation pour un présent qui n'existe que comme préparation à une récompense future."
          },
          {
            type: "neuroscience-card",
            title: "Le cadre, pas les symptômes",
            highlightLabel: "LE FAUX CADRE",
            highlightBody: "Les symptômes ne sont pas le problème. Ce sont des signaux. Votre système nerveux réagit correctement au cadre : « Mon présent n'a de valeur qu'en tant que préparation à une validation future. » Dans ce cadre, le stress est réel et l'alarme est justifiée."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "VOUS N'ÊTES PAS SEUL(E)",
        heading: "Ce qu'en disent d'autres designers",
        content: [
          { type: "quote", text: "« Porte qui se ferme. »" },
          { type: "quote", text: "« On me coupe l'herbe sous le pied. »" },
          { type: "quote", text: "« Envie de me barrer. »" },
          { type: "strategy", action: "Accumuler davantage de références", thought: "« Si je fournis des preuves tangibles de ma progression, ils seront bien obligés de le reconnaître. »" },
          { type: "strategy", action: "Créer son propre système de suivi", thought: "« S'ils ne mesurent pas mes progrès, je le ferai moi-même. »" },
          { type: "strategy", action: "Demander des réunions pour clarifier les choses", thought: "« Si je pose directement la question, ils me donneront des critères concrets. »" },
          { type: "strategy", action: "Comparer avec les autres", thought: "« Il doit y avoir une tendance que je ne vois pas. »" },
          { type: "strategy", action: "Travailler plus dur et plus largement", thought: "« Peut-être que je dois simplement en faire PLUS pour qu'ils le remarquent. »" },
          { type: "strategy", action: "Se préparer à partir", thought: "« Une autre entreprise aura des critères plus clairs. »" },
          { type: "paragraph", text: "Ces mesures redonnent temporairement un sentiment de contrôle. Mais chacune d'entre elles s'accompagne de la même question tacite : « Est-ce que cela suffira ? » Lorsque la demande suivante est refusée, la panique revient." }
        ]
      }
    ]
  }

];

export default scenariosFr;
