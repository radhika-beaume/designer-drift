// Designer_Drift  -  Content Data File
// src/data/scenarios.js
// Version 1.1  -  March 2026
//
// DATA SHAPE PER SCENARIO:
// id, slug, label, scenarioTitle, title, trigger, sections[]
//   sections[]: id, sectionLabel, heading, content[]
//     content[]: type + fields
//       type: "paragraph"        → text
//       type: "pill"             → text
//       type: "quote"            → text
//       type: "subsection-label" → text (used for: "You might feel", "Other designers say", "Why this helps", "Why this doesn't solve it")
//       type: "strategy"         → action, thought
//       type: "neuroscience-card"→ title, introText, highlightLabel, highlightBody, trailingText
//       type: "vedanta-card"     → title, insightText (max 5 words), body

export const scenarios = [

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 1  -  EXPERTISE BYPASS
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-1",
    slug: "expertise-bypass",
    scenarioTitle: "Expertise Bypass",
    label: "SITUATION",
    title: "If my work doesn't count, do I still count?",
    trigger: "You weren't in the meeting. The decisions were made. You're expected to execute.",
    sections: [
      {
        id: "when",
        sectionLabel: "RECOGNITION",
        heading: "When this happens",
        content: [
          { type: "paragraph", text: "You weren't invited to the meeting, but you're expected to execute the decisions made without you." },
          { type: "paragraph", text: "You delivered validated research, but leadership had already decided on a different direction without consulting you." },
          { type: "subsection-label", text: "You might feel" },
          { type: "pill", text: "Heart racing" },
          { type: "pill", text: "Body tense" },
          { type: "pill", text: "Anger" },
          { type: "pill", text: "Helplessness" },
          { type: "pill", text: "Invisible" },
          { type: "pill", text: "Small" },
          { type: "subsection-label", text: "Other designers say" },
          { type: "quote", text: "\"Pas de mots sur le moment, je ne savais pas comment réagir !\"" },
          { type: "quote", text: "\"Je voulais fermer l'ordinateur.\"" },
          { type: "quote", text: "\"Plus rien de faire pour ce projet\"" }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOUR WORKAROUND",
        heading: "What most designers do",
        content: [
          { type: "strategy", action: "Vent to colleagues or friends", thought: "\"They're being unfair. Anyone would feel sidelined here.\"" },
          { type: "strategy", action: "Argue back or present more evidence", thought: "\"If I explain it better, they'll see the value.\"" },
          { type: "strategy", action: "Step away  -  take a walk, get food, listen to music", thought: "\"I just need distance so this doesn't get to me.\"" },
          { type: "strategy", action: "Emotionally detach from the project", thought: "\"Fine. I'll stop caring so it doesn't hurt.\"" },
          { type: "strategy", action: "Look for small wins elsewhere to regain control", thought: "\"If my work isn't valued here, I'll prove myself somewhere else.\"" },
          { type: "subsection-label", text: "Why this helps" },
          { type: "paragraph", text: "These work in the moment. Venting releases pressure. Walking resets your nervous system. Detaching reduces the hurt." },
          { type: "subsection-label", text: "Why this doesn't solve it" },
          { type: "paragraph", text: "You're treating the symptom, not the source. When it happens again tomorrow and it will, the same surge returns. The pattern repeats." }
        ]
      },
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          {
            type: "neuroscience-card",
            title: "Your brain reads exclusion as danger",
            introText: "When you're excluded from decisions or your expertise is dismissed, your brain doesn't distinguish between social rejection and physical threat.",
            highlightLabel: "SOCIAL PAIN = PHYSICAL PAIN",
            highlightBody: "The same pain circuits that fire when you're physically hurt light up when you're professionally dismissed.",
            trailingText: "Social pain is physical pain to your nervous system."
          },
          {
            type: "neuroscience-card",
            title: "The alarm goes off",
            introText: "Your brain has an alarm system (the anterior cingulate cortex) that detects mismatches between expectation and reality.",
            highlightLabel: "EXPECTATION ≠ REALITY",
            highlightBody: "Your brain's alarm system fires the moment the expected outcome doesn't match reality.",
            trailingText: "You expected to be included. You weren't. The alarm fires  -  heart racing, muscles tensing, the urge to shut your laptop and leave. Your body is preparing for threat."
          },
          {
            type: "neuroscience-card",
            title: "\"Why bother?\" isn't laziness",
            introText: "Dopamine fuels motivation through anticipation of reward: put in effort, expect recognition, move forward. When your expertise is consistently dismissed, that cycle breaks.",
            highlightLabel: "BROKEN REWARD CYCLE",
            highlightBody: "When effort consistently meets dismissal, dopamine drops. The system learns: this isn't working.",
            trailingText: "Your brain calculates: \"Effort here doesn't lead to reward.\" Dopamine drops. The \"why bother?\" feeling isn't giving up  -  it's your reward system registering a prediction error."
          },
          {
            type: "neuroscience-card",
            title: "Your body is reacting to a threat",
            introText: "Your nervous system's response is real and automatic. The racing heart, the tension, the motivation crash  -  these aren't overreactions.",
            highlightLabel: "REAL THREAT RESPONSE",
            highlightBody: "Your nervous system is reacting to a perceived threat to your worth and belonging  -  not just a workplace disagreement.",
            trailingText: "Your brain genuinely perceives a threat to your worth, your belonging, your place here. But the question isn't what your body is doing. It's what belief is driving the reaction."
          }
        ]
      },
      {
        id: "vedanta",
        sectionLabel: "THE ROOT CAUSE",
        heading: "The source of pain",
        content: [
          {
            type: "vedanta-card",
            title: "Where the suffering starts",
            insightText: "My work is my belonging.",
            body: "My work is how I know I belong here.\nWhen it's ignored, I don't know where I stand."
          },
          {
            type: "vedanta-card",
            title: "The shift you didn't notice",
            insightText: "I am this skill.",
            body: "You worked hard and built real expertise. Then you stopped saying \"I have this skill\" and started saying \"I am this skill.\"\n\"I am a UX designer.\" Not: \"I have UX design skills.\"\nThe shift was invisible."
          },
          {
            type: "vedanta-card",
            title: "The mug example",
            insightText: "I am this mug.",
            body: "You own a mug. You like it. You use it.\nYou'd never say, \"I am this mug.\"\nWhen it's not used, it doesn't say anything about you."
          },
          {
            type: "vedanta-card",
            title: "What changes when skill becomes identity",
            insightText: "Input ignored. I feel rejected.",
            body: "When the skill becomes \"me,\" a normal event turns personal.\nWhat happened: a design input wasn't used.\nWhat you feel: I was rejected.\nNow your stability depends on whether your work is recognized. That's how it becomes hostage to other people's decisions."
          },
          {
            type: "vedanta-card",
            title: "The clarity",
            insightText: "Dismissal feels personal.",
            body: "When expertise = you, dismissal feels personal.\nWhen skill is something you have, dismissal becomes information.\nSame event. Different impact.\nYou can still push back, advocate, demand better processes  -  without needing recognition to know where you stand. If nothing changes, you don't carry it forward. The event ends where it happened."
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 2  -  EXCLUSION FROM STRATEGIC DECISIONS
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-2",
    slug: "strategic-exclusion",
    scenarioTitle: "Exclusion from Strategic Decisions",
    label: "SITUATION",
    title: "If I'm not invited, am I still at execution level?",
    trigger: "You're doing the work but not in the room where it's shaped. You find out what was decided, not why.",
    sections: [
      {
        id: "when",
        sectionLabel: "RECOGNITION",
        heading: "When this happens",
        content: [
          { type: "paragraph", text: "You're not on the kickoff invite. Later, the PO briefs you: \"Business wants this feature by Q2. Start with wireframes.\"" },
          { type: "paragraph", text: "You find out priorities and KPIs secondhand, already decided. You were never in the room where it happened." },
          { type: "paragraph", text: "You schedule your own stakeholder interviews just to understand why the project exists  -  because no one included you in the foundational discussions." },
          { type: "subsection-label", text: "You might feel" },
          { type: "pill", text: "Chest tightening" },
          { type: "pill", text: "Jaw clenched" },
          { type: "pill", text: "Frustration" },
          { type: "pill", text: "Resignation" },
          { type: "pill", text: "Stuck" },
          { type: "pill", text: "Fatigued" },
          { type: "subsection-label", text: "Other designers say" },
          { type: "quote", text: "\"Plus rien de faire pour ce projet.\"" },
          { type: "quote", text: "\"Si ils veulent faire sans moi, ils le feront.\"" }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOUR WORKAROUND",
        heading: "What most designers do",
        content: [
          { type: "strategy", action: "Push back with the PO/PM", thought: "\"If I assert myself, they'll recognize I belong at that level.\"" },
          { type: "strategy", action: "Compare yourself to other designers", thought: "\"They're ahead. I'm behind. Another company will place me correctly.\"" },
          { type: "strategy", action: "Vent to other designers", thought: "\"They don't value design strategically. The system is broken.\"" },
          { type: "strategy", action: "Emotionally detach", thought: "\"Fine. I'll just execute what they decide.\"" },
          { type: "strategy", action: "Look for small wins elsewhere", thought: "\"If I can't be strategic here, I'll matter somewhere else.\"" },
          { type: "subsection-label", text: "Why this helps" },
          { type: "paragraph", text: "These moves bring short-term relief. You feel less stuck, more in control. Getting context helps you work better. Detaching reduces the sting." },
          { type: "subsection-label", text: "Why this doesn't solve it" },
          { type: "paragraph", text: "Each move carries the same hope:\"If I prove my value elsewhere, I'll be included next time.\" Inclusion becomes the signal of progress. When it doesn't come, doubt is inevitable." }
        ]
      },
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          {
            type: "neuroscience-card",
            title: "Being sidelined registers as injury",
            introText: "When you're excluded from strategic decisions, your brain doesn't distinguish between social rejection and physical threat.",
            highlightLabel: "SIDELINING = SOCIAL INJURY",
            highlightBody: "Being positioned as executor-only activates the same pain circuits as physical injury.",
            trailingText: "Being \"just the hands\" registers as an injury to your nervous system."
          },
          {
            type: "neuroscience-card",
            title: "The status alarm",
            introText: "Your brain has an alarm system that detects mismatches between expectation and reality.",
            highlightLabel: "EXPECTATION ≠ REALITY",
            highlightBody: "The gap between expected role and actual positioning triggers your brain's threat detection system.",
            trailingText: "You expected to be included as a strategic partner. Instead you're positioned as executor-only. The alarm fires  -  chest tightening, jaw clenched, the urge to push back or withdraw."
          },
          {
            type: "neuroscience-card",
            title: "Trapped in responsibility without control",
            introText: "Being executor-only creates a specific type of stress: you're responsible for results but can't influence the strategy that shapes them. This triggers elevated cortisol  -  the same physiological response as being at the bottom of a hierarchy.",
            highlightLabel: "LEARNED HELPLESSNESS",
            highlightBody: "When effort consistently has no impact on outcomes, the brain stops trying to influence the situation.",
            trailingText: "Over time, the system learns that effort has no impact. This is called learned helplessness."
          },
          {
            type: "neuroscience-card",
            title: "The loop that won't stop",
            introText: "Because the exclusion feels unresolved, your brain keeps cycling on it.",
            highlightLabel: "UNRESOLVED LOOP",
            highlightBody: "The Default Mode Network replays unresolved social threats  -  draining energy without producing answers.",
            trailingText: "A region called the Default Mode Network becomes hyperactive, replaying the same question: \"Why wasn't I included? What does this mean about me?\" This isn't problem-solving. It's why you feel mentally drained even when you haven't done much work."
          }
        ]
      },
      {
        id: "vedanta",
        sectionLabel: "THE ROOT CAUSE",
        heading: "The source of pain",
        content: [
          {
            type: "vedanta-card",
            title: "Where the suffering starts",
            insightText: "Still at execution level.",
            body: "Compared to others, I'm still at execution level.\nMy voice isn't part of the decisions.\nThis is how I read my position here."
          },
          {
            type: "vedanta-card",
            title: "The shift you didn't notice",
            insightText: "Which rooms am I invited into?",
            body: "When you entered design, you cared about the craft  -  the creativity, the problem-solving, the impact on users.\nOver time, something else slipped in. Promotions celebrated publicly. Conference speakers framed as \"strategic leaders.\" Job descriptions tying strategy to seniority. The ecosystem quietly taught you what counts as progress.\nYou stopped measuring yourself by the quality of your thinking. You started measuring by which rooms you're invited into."
          },
          {
            type: "vedanta-card",
            title: "The chef who lost the menu",
            insightText: "Is my name on the menu?",
            body: "You're hired as a chef for your taste.\nYou know how to cook well.\nOne day, you stop asking: \"What should be cooked?\"\nAnd start checking whether your name is on the menu."
          },
          {
            type: "vedanta-card",
            title: "What changes when position becomes identity",
            insightText: "I haven't moved up.",
            body: "When position becomes the reference point, exclusion turns personal.\nWhat happened: you weren't invited to the strategic meeting.\nWhat it signals: I haven't moved up. I'm still execution-level.\nInstead of being measured by how well you understand the problem and the user, it gets measured by where you're positioned and which rooms you're invited into."
          },
          {
            type: "vedanta-card",
            title: "The clarity",
            insightText: "Information, not a verdict.",
            body: "Strategic thinking is something you already do. Being positioned as \"strategic\" is an organizational choice. You can argue for inclusion, ask for access, push for context  -  without needing the invite to confirm your level.\nWhen the invite doesn't come, it's information, not a verdict.\nThat's the difference between pushing for influence and needing permission to feel progressed."
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 3  -  AUTHORITY OVERRIDE
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-3",
    slug: "authority-override",
    scenarioTitle: "Authority Override",
    label: "SITUATION",
    title: "Does truth matter at all here?",
    trigger: "You brought evidence. They brought hierarchy. The decision was already made before you spoke.",
    sections: [
      {
        id: "when",
        sectionLabel: "RECOGNITION",
        heading: "When this happens",
        content: [
          { type: "paragraph", text: "During a validation meeting, you bring solid arguments - user research, data, clear pain points. You know the reasoning holds. The decision still comes down from above. Hierarchy overrides the discussion. The direction is set, regardless of the evidence." },
          { type: "paragraph", text: "You've run the process before. Leadership asks you to redo it anyway. The outcome was already decided." },
          { type: "paragraph", text: "Someone outside your domain challenges your work using their position as the argument. Their only evidence: \"It worked at my last company.\"" },
          { type: "subsection-label", text: "You might feel" },
          { type: "pill", text: "Body tense" },
          { type: "pill", text: "Anger" },
          { type: "pill", text: "Contempt" },
          { type: "pill", text: "Provoked" },
          { type: "pill", text: "Irritation" },
          { type: "pill", text: "Agitation" },
          { type: "subsection-label", text: "Other designers say" },
          { type: "quote", text: "« Quel con ! »" },
          { type: "quote", text: "« Tu me challenges dans mon domaine?! »" },
          { type: "quote", text: "« Il utilise sa position pour imposer ses idées. »" }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOUR WORKAROUND",
        heading: "What most designers do",
        content: [
          { type: "strategy", action: "Argue harder", thought: "\"Maybe if I explain it better, they'll understand.\"" },
          { type: "strategy", action: "Escalate intellectually", thought: "\"Let me show you exactly why this is wrong.\"" },
          { type: "strategy", action: "Moralize the situation", thought: "\"This is misleading. It's bad for users.\"" },
          { type: "strategy", action: "Attack competence", thought: "\"You don't understand this domain.\"" },
          { type: "strategy", action: "Use sarcasm or provocation", thought: "\"Sure, if that's what you want.\"" },
          { type: "strategy", action: "Comply outwardly", thought: "\"Ok, ok.\"  -  while disagreeing completely." },
          { type: "strategy", action: "Vent intensely afterward", thought: "Replaying the scene, seeking allies to confirm you're right." },
          { type: "subsection-label", text: "Why this helps" },
          { type: "paragraph", text: "These strategies preserve a critical belief: \"If I just do it better, it will work next time.\"Each move delays facing the actual problem: your effort and their decisions aren't connected the way you think they are." },
          { type: "subsection-label", text: "Why this doesn't solve it" },
          { type: "paragraph", text: "Because you're protecting the attachment. You keep acting as if the better your argument, the more it should shape the decision. In many organizations, it doesn't work that way. Power decides. Evidence is optional. Each time you argue harder expecting a different result, the collision repeats. And the frustration compounds." }
        ]
      },
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          {
            type: "neuroscience-card",
            title: "Expectation violation as injury",
            introText: "The same pain circuits that fire when you're physically hurt activate when a system rejects your input. Your brain does not register this as \"just disagreement.\" It registers it as a social injury.",
            highlightLabel: "EXPECTATION VIOLATION = PHYSICAL INJURY",
            highlightBody: "Your brain registers ignored evidence as a social injury  -  activating the same circuits as physical pain.",
            trailingText: "Your brain's alarm system (the anterior cingulate cortex) detects the mismatch: you expect competence and evidence to shape outcomes. What happens instead: hierarchy decides first. The alarm fires  -  chest tightening, jaw clenching, the urge to push back or withdraw."
          },
          {
            type: "neuroscience-card",
            title: "Dopamine prediction error",
            introText: "Your drive to gather evidence and argue your case is fueled by dopamine. Each time you argue harder expecting truth to win, your brain predicts a reward: the system bending to evidence.",
            highlightLabel: "DOPAMINE DROP = \"WHY BOTHER?\"",
            highlightBody: "When truth consistently fails to win, the brain stops predicting reward from effort.",
            trailingText: "When power ignores your arguments, that reward doesn't arrive. Dopamine drops below baseline. The \"why bother?\" feeling isn't weakness  -  it's your brain registering that the effort isn't working."
          },
          {
            type: "neuroscience-card",
            title: "The expectation loop",
            introText: "Your brain doesn't just process \"evidence was ignored.\" It processes \"I did X expecting Y, and Y didn't happen.\"",
            highlightLabel: "BROKEN ACTION-OUTCOME LINK",
            highlightBody: "Repeated prediction failures teach the brain that effort and outcome are disconnected.",
            trailingText: "When you gather research, your brain codes it as: \"This action should lead to that decision.\" Each time the prediction fails, your brain questions whether the action is worth the cost. The anger isn't about being wrong. It's about the collapse of: \"If I do my job well, it should matter.\""
          },
          {
            type: "neuroscience-card",
            title: "Loss of control and predictability",
            introText: "Stress is most corrosive when you lose both control and predictability. Control is lost when evidence has no impact. Predictability is lost when decisions follow power rather than reason.",
            highlightLabel: "CONTROL + PREDICTABILITY LOST",
            highlightBody: "Losing both control and predictability is the most corrosive stress combination  -  it keeps cortisol chronically elevated.",
            trailingText: "This combination drives sustained elevation of cortisol, keeping the system in a prolonged stress state. The nervous system isn't reacting to hierarchy. It's reacting to the collapse of a belief: \"If I'm right, my judgment should have authority.\""
          }
        ]
      },
      {
        id: "vedanta",
        sectionLabel: "THE ROOT CAUSE",
        heading: "The source of pain",
        content: [
          {
            type: "vedanta-card",
            title: "Where the suffering starts",
            insightText: "Good work should guarantee outcome.",
            body: "You gather evidence to inform. That's the job. You present research to share what you found. That's professional.\nBut there's something else running underneath:\"If I present solid evidence, the decision should follow.\"\nWhen it doesn't, you blame the execution, not the expectation. \"Maybe I didn't have enough proof. Next time I'll prepare better.\"\nThat's the attachment. The belief that good work guarantees outcome."
          },
          {
            type: "vedanta-card",
            title: "The shift you didn't notice",
            insightText: "Outcome is now my responsibility.",
            body: "You run discovery. You find a real problem  -  users struggling, workflows breaking. You validate it. Document it. The insight is solid.\nAt this point, something shifts.\n\"This needs to be fixed\" becomes your goal. Your work quietly changes from understanding the problem to getting others to act on it.\nThe research was complete when you finished it. Now its value depends on whether they act.\nThat's the false belief: the outcome is now my responsibility."
          },
          {
            type: "vedanta-card",
            title: "The clarity",
            insightText: "That meeting was just a meeting.",
            body: "You present the research. They ignore it. You leave the meeting empty-handed.\nIf the work needed to win to have been worth doing  -  that meeting was a failure.\nIf the work was complete when you finished it  -  that meeting was just a meeting.\nSame dismissed research. Different internal cost.\nYou still argue. You still represent users. But you're no longer dependent on the outcome to know the work was real."
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 4  -  OPAQUE EVALUATION
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-4",
    slug: "opaque-evaluation",
    scenarioTitle: "Opaque Evaluation",
    label: "SITUATION",
    title: "Who will plan and track my progress, if not me?",
    trigger: "You don't know what good looks like here. The goalposts move and nobody tells you where they are.",
    sections: [
      {
        id: "when",
        sectionLabel: "RECOGNITION",
        heading: "When this happens",
        content: [
          { type: "paragraph", text: "You asked for a promotion and your request was refused. No clear reasons given. You don't know what's missing, so you can't build a progress roadmap." },
          { type: "paragraph", text: "Despite years of experience, you weren't given senior-level projects. Now suddenly you are. You're left wondering: what exactly was I missing before? What changed?" },
          { type: "paragraph", text: "You're blamed for low productivity, but you were never given metrics. You have no idea what \"good enough\" looks like here." },
          { type: "subsection-label", text: "You might feel" },
          { type: "pill", text: "Tense" },
          { type: "pill", text: "Blocked" },
          { type: "pill", text: "Stuck" },
          { type: "pill", text: "Sunday dread" },
          { type: "pill", text: "Insomnia" },
          { type: "pill", text: "Working in fog" },
          { type: "subsection-label", text: "Other designers say" },
          { type: "quote", text: "\"Porte qui se ferme.\"" },
          { type: "quote", text: "\"On coupe l'herbe sous le pied.\"" },
          { type: "quote", text: "\"Envie de me barrer.\"" }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOUR WORKAROUND",
        heading: "What most designers do",
        content: [
          { type: "strategy", action: "Gather more credentials", thought: "\"If I build visible proof of growth, they'll have to recognize it.\"" },
          { type: "strategy", action: "Create your own tracking system", thought: "\"If they won't measure my progress, I will.\"" },
          { type: "strategy", action: "Seek clarity meetings", thought: "\"If I ask directly, they'll give me concrete criteria.\"" },
          { type: "strategy", action: "Compare to others", thought: "\"There must be a pattern I'm not seeing.\"" },
          { type: "strategy", action: "Work harder and broader", thought: "\"Maybe I just need to do MORE for them to notice.\"" },
          { type: "strategy", action: "Prepare to leave", thought: "\"A different company will have clearer criteria.\"" },
          { type: "subsection-label", text: "Why this helps" },
          { type: "paragraph", text: "These moves restore control and predictability  -  the two things opaque evaluation strips away. Tracking your own progress gives you a lever to pull. Seeking clarity turns fog into information. Action feels productive, temporarily masking the fatigue of working blind." },
          { type: "subsection-label", text: "Why this doesn't solve it" },
          { type: "paragraph", text: "Each tutorial carries a silent question: \"Will this be enough proof?\" Each comparison to others asks:\"What do I still lack?\" When they don't give you a roadmap, you build your own. So when the next request is refused, the panic returns." }
        ]
      },
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          {
            type: "neuroscience-card",
            title: "The fog isn't metaphorical",
            introText: "When you expect a clear path toward success and no roadmap is given, you lose direction. That loss of direction is physiologically expensive.",
            highlightLabel: "UNCERTAINTY = PHYSIOLOGICAL COST",
            highlightBody: "The absence of a clear direction keeps the nervous system in sustained hyper-vigilance.",
            trailingText: "The body stays in hyper-vigilance  -  Sunday dread, insomnia, the knot in your stomach. This isn't anxiety about nothing. It's your nervous system responding to genuine uncertainty about whether your efforts are leading anywhere."
          },
          {
            type: "neuroscience-card",
            title: "The alarm that won't stop",
            introText: "Once an internal expectation is in place, the brain faithfully reacts to preserve it. The brain has an alarm system (the anterior cingulate cortex) that detects mismatches between expectation and reality.",
            highlightLabel: "NO ANSWER TO \"WHAT'S WRONG?\"",
            highlightBody: "When worth is tied to future validation, the alarm can't turn off  -  there's no answer that satisfies it.",
            trailingText: "When your worth is tied to future confirmation, the absence of clear direction keeps triggering that alarm. The nervous system can't settle  -  not because feedback is missing, but because the question \"What's wrong?\" has no answer within this framework."
          },
          {
            type: "neuroscience-card",
            title: "Effort without feedback breaks motivation",
            introText: "When effort is reduced to a future payoff, the present turns into means-only activity. Action no longer feels complete in itself.",
            highlightLabel: "DOPAMINE DROP = DEFERRED LIFE",
            highlightBody: "The brain doesn't sustain motivation for a present that exists only as preparation for a future payoff.",
            trailingText: "Dopamine drops  -  not because you're lazy or broken, but because the brain doesn't sustain energy for a life that has been postponed. The biological basis of \"why bother?\" is simple: when life is deferred, energy drains."
          },
          {
            type: "neuroscience-card",
            title: "The framework, not the symptoms",
            introText: "The physiological symptoms aren't the problem. They're signals. Your nervous system is reacting correctly to the framework you're operating under: \"My present has value only as preparation for guaranteed future validation.\"",
            highlightLabel: "THE FALSE FRAMEWORK",
            highlightBody: "The symptoms are correct responses to a flawed operating framework  -  not signs that something is wrong with you.",
            trailingText: "Within that framework, opaque criteria are a genuine threat. You cannot plan, cannot track, cannot know if effort counts. The stress is real. The alarm is justified  -  within that framework. But the question isn't: \"How do I get clearer criteria?\" The question is: \"Does my present need this framework at all?\""
          }
        ]
      },
      {
        id: "vedanta",
        sectionLabel: "THE ROOT CAUSE",
        heading: "The source of pain",
        content: [
          {
            type: "vedanta-card",
            title: "Where the suffering starts",
            insightText: "Success is ahead of me.",
            body: "Right now I'm unsuccessful; success is ahead.\nWithout a roadmap, I don't know if I'm moving toward it or standing still."
          },
          {
            type: "vedanta-card",
            title: "The shift you didn't notice",
            insightText: "The framework shifted.",
            body: "You're working on a project. Completely absorbed. The problem is interesting, the solution emerging. You're present.\nIn this moment, the work itself is enough.\nThen you open LinkedIn.\n\"10 Skills Senior UX Designers Must Have\" \"How to Get Promoted: The Complete Roadmap\" \"Are You Tracking These Metrics?\"\nSomething shifts.\nThe work in front of you  -  the actual project, the actual attention  -  suddenly feels insufficient.\nSuccess is no longer here. It's ahead. At the next level. Behind criteria you haven't met yet.\nYour present quietly changes from life happening now to preparation for future validation.\nThe framework shifted. You didn't notice."
          },
          {
            type: "vedanta-card",
            title: "Two ways to work",
            insightText: "Same project. Same uncertainty.",
            body: "You have a project. The data is messy. There is no clear roadmap.\nOne way of working: You engage with the problem. You test, discard, adjust. The work holds your attention.\nAnother way of working: You keep thinking, \"What will this lead to? How will this look? What does this prove about me?\"\nSame project.\nSame uncertainty.\nIn one case, the work is happening.\nIn the other, the mind is busy imagining what the work will later prove."
          },
          {
            type: "vedanta-card",
            title: "The clarity",
            insightText: "Waiting for them to decide.",
            body: "The opaque criteria didn't create the problem. It exposed that you've been organizing your entire present around achieving a future validation you never consciously chose to pursue.\nWhat does \"success\" actually mean here? Are these goals truly yours, or absorbed from the system? Who gets to define \"failure\"?\nWhat's collapsing isn't your ability to progress. It's the unexamined belief that you're currently unsuccessful and that someone else will eventually tell you when you're \"enough.\"\nTheir criteria will remain opaque. But that only matters if you're waiting for them to declare you successful."
          }
        ]
      }
    ]
  }

];

export default scenarios;


