// Designer_Drift — Content Data File
// src/data/scenarios.js
// Version 2.0 — April 2026
//
// DATA SHAPE PER SCENARIO:
// id, slug, label, scenarioTitle, title, trigger, bodyText[], sections[]
//
//   bodyText[]: type + fields
//     type: "paragraph"              → text
//     type: "pull-quote"             → text
//     type: "illustration-paragraph" → text, medallion
//
//   sections[]: id, sectionLabel, heading, introLine?, content[]
//     content[]: type + fields
//       type: "pill"              → text
//       type: "quote"             → text
//       type: "paragraph"         → text
//       type: "neuroscience-card" → title, highlightLabel, highlightBody

const scenarios = [

  // ─────────────────────────────────────────────────────────────
  // SCENARIO 1 — EXPERTISE BYPASS
  // ─────────────────────────────────────────────────────────────
  {
    id: "scenario-1",
    slug: "expertise-bypass",
    scenarioTitle: "Expertise Bypass",
    label: "SITUATION",
    title: "If it's ignored, I don't know where I stand.",
    trigger: "You weren't in the meeting. The decisions were made. You're expected to execute.",
    bodyText: [
      {
        type: "paragraph",
        text: "I wasn't invited to the design meeting. I am expected to execute decisions made without me. I am the UX designer of the project."
      },
      {
        type: "paragraph",
        text: "I have acquired UX designer skills. This is an acquisition. My identity is not determined by the objects/skills I acquire. So the phrase \"I am a UX designer\" is false. \"I have UX designer skills.\" The company hires me to leverage these skills. It's the company's choice to optimise what they pay for. It doesn't reflect at all my worth as a designer or even as a human being."
      },
      {
        type: "paragraph",
        text: "During skilling up, the tool became a role. The emotional engagement blurred the gap. The role became territory to protect and guard."
      },
      {
        type: "pull-quote",
        text: "Now my stability depends on whether my work is recognized. That's how it becomes hostage to other people's decisions."
      },
      {
        type: "illustration-paragraph",
        text: "I am a monkey. I have this mug. I like it. I use it to drink water from the river nearby. It's handy. Other monkeys borrow this mug. Whether they use it or not, is their choice. It doesn't question my sense of existence. I was there before the mug, I was there when the mug was not used, and I will be there after the mug.",
        medallion: "Medaillon_Scenario1"
      },
      {
        type: "pull-quote",
        text: "Will I let the external world determine who I am, through my acquisitions?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          { type: "pill", text: "Heart racing" },
          { type: "pill", text: "Body tense" },
          { type: "pill", text: "Anger" },
          { type: "pill", text: "Helplessness" },
          { type: "pill", text: "Invisible" },
          { type: "pill", text: "Small" },
          {
            type: "neuroscience-card",
            title: "Your brain reads exclusion as danger",
            highlightLabel: "SOCIAL PAIN = PHYSICAL PAIN",
            highlightBody: "The same pain circuits that fire when you're physically hurt light up when you're professionally dismissed."
          },
          {
            type: "neuroscience-card",
            title: "The alarm goes off",
            highlightLabel: "EXPECTATION ≠ REALITY",
            highlightBody: "Your brain's alarm system (the anterior cingulate cortex) fires the moment the expected outcome doesn't match reality."
          },
          {
            type: "neuroscience-card",
            title: "\"Why bother?\" isn't laziness",
            highlightLabel: "REWARD WITHHELD",
            highlightBody: "Dopamine fuels motivation through anticipation of reward: put in effort, expect recognition, move forward. When your expertise is consistently dismissed, that cycle breaks."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOU ARE NOT ALONE",
        heading: "What other designers say",
        content: [
          { type: "quote", text: "\"Pas de mots sur le moment, je ne savais pas comment réagir !\"" },
          { type: "quote", text: "\"Je voulais fermer l'ordinateur.\"" },
          { type: "quote", text: "\"Plus rien à faire pour ce projet\"" },
          { type: "strategy", action: "Vent to colleagues or friends", thought: "\"They're being unfair. Anyone would feel sidelined here.\"" },
          { type: "strategy", action: "Argue back or present more evidence", thought: "\"If I explain it better, they'll see the value.\"" },
          { type: "strategy", action: "Step away — take a walk, get food, listen to music", thought: "\"I just need distance so this doesn't get to me.\"" },
          { type: "strategy", action: "Emotionally detach from the project", thought: "\"Fine. I'll stop caring so it doesn't hurt.\"" },
          { type: "strategy", action: "Look for small wins elsewhere to regain control", thought: "\"If my work isn't valued here, I'll prove myself somewhere else.\"" },
          { type: "paragraph", text: "These work in the moment but only in the moment. The pattern repeats because none of these touches the source." }
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
    scenarioTitle: "Exclusion from Strategic Decisions",
    label: "SITUATION",
    title: "My voice isn't part of the decisions.",
    trigger: "You're doing the work but not in the room where it's shaped. You find out what was decided, not why.",
    bodyText: [
      {
        type: "paragraph",
        text: "The foundational strategic discussions - KPIs, priorities, decisions. I am not consulted. I hear about them secondhand."
      },
      {
        type: "paragraph",
        text: "I master discovery, have a clear product vision and a roadmap under my belt. Strategy has been part of my UX arsenal for a long time. The strategy thinking I already do. Whether I am seen doing it or not is irrelevant."
      },
      {
        type: "paragraph",
        text: "But when I am not invited formally to a strategic meeting, I feel excluded. The invitation would have confirmed the position. But the hurt is real. Validation becomes more important than the work itself."
      },
      {
        type: "paragraph",
        text: "The ecosystem quietly taught me what counts as progress. Conference speakers are framed as \"strategic leaders.\" Job descriptions tying strategy to seniority."
      },
      {
        type: "pull-quote",
        text: "I stopped measuring myself by the quality of my thinking. I started measuring by which rooms I am invited into."
      },
      {
        type: "illustration-paragraph",
        text: "I am a fox. Around me, everyone said the birds are the aim - visible, celebrated, they flock, they fly together, they are seen moving. The birds flew away. The fox hunts alone, on the ground, unseen, nose to the earth. The fox doesn't need to be in the flock to hunt.",
        medallion: "Medaillon_Scenario2"
      },
      {
        type: "pull-quote",
        text: "Is the title more important than the work?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          { type: "pill", text: "Chest tightening" },
          { type: "pill", text: "Jaw clenched" },
          { type: "pill", text: "Frustration" },
          { type: "pill", text: "Resignation" },
          { type: "pill", text: "Stuck" },
          { type: "pill", text: "Fatigued" },
          {
            type: "neuroscience-card",
            title: "Being sidelined registers as injury",
            highlightLabel: "SIDELINING = SOCIAL INJURY",
            highlightBody: "Being positioned as executor-only activates the same pain circuits as physical injury."
          },
          {
            type: "neuroscience-card",
            title: "The status alarm",
            highlightLabel: "EXPECTATION ≠ REALITY",
            highlightBody: "The gap between expected role and actual positioning triggers your brain's threat detection system."
          },
          {
            type: "neuroscience-card",
            title: "Trapped in responsibility without control",
            highlightLabel: "LEARNED HELPLESSNESS",
            highlightBody: "When effort consistently has no impact on outcomes, the brain stops trying to influence the situation."
          },
          {
            type: "neuroscience-card",
            title: "The loop that won't stop",
            highlightLabel: "UNRESOLVED LOOP",
            highlightBody: "The Default Mode Network replays unresolved social threats — draining energy without producing answers. 'Why wasn't I included? What does this mean about me?' These questions run on a loop, draining you even when you haven't done much work."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOU ARE NOT ALONE",
        heading: "What other designers say",
    
        content: [
          { type: "quote", text: "\"Plus rien à faire pour ce projet.\"" },
          { type: "quote", text: "\"S'ils veulent faire sans moi, ils le feront.\"" },
          { type: "strategy", action: "Push back with the PO/PM", thought: "\"If I assert myself, they'll recognize I belong at that level.\"" },
          { type: "strategy", action: "Compare yourself to other designers", thought: "\"They're ahead. I'm behind. Another company will place me correctly.\"" },
          { type: "strategy", action: "Vent to other designers", thought: "\"They don't value design strategically. The system is broken.\"" },
          { type: "strategy", action: "Emotionally detach", thought: "\"Fine. I'll just execute what they decide.\"" },
          { type: "strategy", action: "Look for small wins elsewhere", thought: "\"If I can't be strategic here, I'll matter somewhere else.\"" },
          { type: "paragraph", text: "These moves bring short-term relief but each one carries the same silent hope: if I prove my value, I'll be included next time. When inclusion doesn't come, doubt returns." }
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
    scenarioTitle: "Authority overrides expertise",
    label: "SITUATION",
    title: "I control the work and also its result.",
    trigger: "You brought evidence. They brought hierarchy. The decision was already made before you spoke.",
    bodyText: [
      {
        type: "paragraph",
        text: "During a validation meeting, I brought solid arguments - user research, data, clear pain points. I gathered evidence to inform. But the decision still comes down from above. Hierarchy overrides the discussion."
      },
      {
        type: "pull-quote",
        text: "My commitment is to work. Not the result."
      },
      {
        type: "paragraph",
        text: "My full attention was how to communicate the insights and understand business objectives in the most unbiased, clear way. Translating them into solutions - that is the work."
      },
      {
        type: "paragraph",
        text: "Somewhere down the road, my responsibility to the work quietly extended to the outcome of the work. The goal quietly shifted from understanding the problem to getting others to act on it. My worth got intrinsically linked to the outcome of my work."
      },
      {
        type: "illustration-paragraph",
        text: "I am a Shiba Inu. I love to play. The stick is one of the ways I play. One day while playing, the stick fell in the river and the current took it the other way. I jumped in after it. The playing stopped. The stick was never the play.",
        medallion: "Medaillon_Scenario3"
      },
      {
        type: "pull-quote",
        text: "Did I truly love to play?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          { type: "pill", text: "Body tense" },
          { type: "pill", text: "Anger" },
          { type: "pill", text: "Contempt" },
          { type: "pill", text: "Provoked" },
          { type: "pill", text: "Irritation" },
          { type: "pill", text: "Agitation" },
          {
            type: "neuroscience-card",
            title: "The alarm fires",
            highlightLabel: "EXPECTATION VIOLATION = PHYSICAL INJURY",
            highlightBody: "Your brain's alarm system (the anterior cingulate cortex) detects the mismatch: you expect competence and evidence to shape outcomes. What happens instead: hierarchy decides first."
          },
          {
            type: "neuroscience-card",
            title: "Dopamine Prediction Error",
            highlightLabel: "DOPAMINE DROP = \"WHY BOTHER?\"",
            highlightBody: "When truth consistently fails to win, the brain stops predicting reward from effort."
          },
          {
            type: "neuroscience-card",
            title: "The Expectation Loop",
            highlightLabel: "BROKEN ACTION-OUTCOME LINK",
            highlightBody: "Your brain doesn't just process \"evidence was ignored.\" It processes \"I did X expecting Y, and Y didn't happen.\""
          },
          {
            type: "neuroscience-card",
            title: "Loss of control and predictability",
            highlightLabel: "CONTROL + PREDICTABILITY LOST",
            highlightBody: "Control is lost when evidence has no impact. Predictability is lost when decisions follow power rather than reason. This combination keeps the nervous system in a prolonged stress state."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOU ARE NOT ALONE",
        heading: "What other designers say",
 
        content: [
          { type: "quote", text: "« Quel con ! »" },
          { type: "quote", text: "« Tu me challenges dans mon domaine?! »" },
          { type: "quote", text: "« Il utilise sa position pour imposer ses idées. »" },
          { type: "strategy", action: "Argue harder", thought: "\"Maybe if I explain it better, they'll understand.\"" },
          { type: "strategy", action: "Escalate intellectually", thought: "\"Let me show you exactly why this is wrong.\"" },
          { type: "strategy", action: "Moralize the situation", thought: "\"This is misleading. It's bad for users.\"" },
          { type: "strategy", action: "Attack competence", thought: "\"You don't understand this domain.\"" },
          { type: "strategy", action: "Use sarcasm or provocation", thought: "\"Sure, if that's what you want.\"" },
          { type: "strategy", action: "Comply outwardly", thought: "\"Ok, ok.\" — while disagreeing completely." },
          { type: "strategy", action: "Vent intensely afterward", thought: "Replaying the scene, seeking allies to confirm you're right." },
          { type: "paragraph", text: "These strategies preserve one belief: 'If I do it better, it will work next time.' But effort and their decisions aren't connected the way you think. Power decides. Evidence is optional. The collision repeats." }
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
    scenarioTitle: "Opaque Evaluation",
    label: "SITUATION",
    title: "Right now I'm unsuccessful; success is ahead.",
    trigger: "You don't know what good looks like here. The goalposts move and nobody tells you where they are.",
    bodyText: [
      {
        type: "paragraph",
        text: "I am blamed, accused of low productivity, rejected for a position. There is uncertainty looming - I was given no reason, no roadmap, no milestones to plot my progress against."
      },
      {
        type: "paragraph",
        text: "The verdict of others upon me, I have interpreted as: I am unsuccessful right now. Rejection, blame, silence - whatever the external world throws at me, these are events."
      },
      {
        type: "pull-quote",
        text: "How they impact my inner world is my sovereign decision."
      },
      {
        type: "paragraph",
        text: "The question here is not whether these events are fair or unfair? The question worth asking is: why do I take them as criteria for determining whether I am successful or not? These criteria I absorbed, what is their source? School, job market, society through films, music videos, social media."
      },
      {
        type: "illustration-paragraph",
        text: "I am a kingfisher. The fish beneath my beak, this moment, this work, is real. But I was told the grand catch is out there, somewhere ahead. So I scan the horizon and miss what's already mine.",
        medallion: "Medaillon_Scenario4"
      },
      {
        type: "pull-quote",
        text: "Your mind is your own, a sacred place. Will you let anybody walk through it with dirty shoes?"
      }
    ],
    sections: [
      {
        id: "brain",
        sectionLabel: "NEUROSCIENCE",
        heading: "What's happening in your brain",
        content: [
          { type: "pill", text: "Tense" },
          { type: "pill", text: "Blocked" },
          { type: "pill", text: "Stuck" },
          { type: "pill", text: "Sunday dread" },
          { type: "pill", text: "Insomnia" },
          { type: "pill", text: "Working in fog" },
          {
            type: "neuroscience-card",
            title: "The fog isn't metaphorical",
            highlightLabel: "UNCERTAINTY = PHYSIOLOGICAL COST",
            highlightBody: "When you expect a clear path and none is given, the nervous system stays in hyper-vigilance. It cannot settle because the question 'Am I moving forward?' has no answer."
          },
          {
            type: "neuroscience-card",
            title: "The alarm that won't stop",
            highlightLabel: "NO ANSWER TO \"WHAT'S WRONG?\"",
            highlightBody: "The brain has an alarm system (the anterior cingulate cortex) that detects mismatches between expectation and reality. When worth is tied to future validation, the alarm never finds its answer and never stops."
          },
          {
            type: "neuroscience-card",
            title: "Effort without feedback breaks motivation",
            highlightLabel: "DOPAMINE DROP = DEFERRED LIFE",
            highlightBody: "The brain doesn't sustain motivation for a present that exists only as preparation for a future payoff."
          },
          {
            type: "neuroscience-card",
            title: "The framework, not the symptoms",
            highlightLabel: "THE FALSE FRAMEWORK",
            highlightBody: "The symptoms aren't the problem. They're signals. Your nervous system is reacting correctly to the framework: 'My present has value only as preparation for future validation.' Within that framework, the stress is real and the alarm is justified."
          }
        ]
      },
      {
        id: "coping",
        sectionLabel: "YOU ARE NOT ALONE",
        heading: "What other designers say",
      
        content: [
          { type: "quote", text: "\"Porte qui se ferme.\"" },
          { type: "quote", text: "\"On coupe l'herbe sous le pied.\"" },
          { type: "quote", text: "\"Envie de me barrer.\"" },
          { type: "strategy", action: "Gather more credentials", thought: "\"If I build visible proof of growth, they'll have to recognize it.\"" },
          { type: "strategy", action: "Create your own tracking system", thought: "\"If they won't measure my progress, I will.\"" },
          { type: "strategy", action: "Seek clarity meetings", thought: "\"If I ask directly, they'll give me concrete criteria.\"" },
          { type: "strategy", action: "Compare to others", thought: "\"There must be a pattern I'm not seeing.\"" },
          { type: "strategy", action: "Work harder and broader", thought: "\"Maybe I just need to do MORE for them to notice.\"" },
          { type: "strategy", action: "Prepare to leave", thought: "\"A different company will have clearer criteria.\"" },
          { type: "paragraph", text: "These moves restore a sense of control temporarily. But each one carries the same silent question: 'Will this be enough?' When the next request is refused, the panic returns." }
        ]
      }
    ]
  }

];

export default scenarios;
