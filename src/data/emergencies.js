/**
 * Emergency data — full step-by-step guides
 */

const emergencies = {
    snake_bite: {
        id: 'snake_bite',
        title: 'Snake Bite',
        emoji: '🐍',
        severity: 'High',
        color: '#E53E3E',
        warning: [
            'Do NOT cut the wound or try to suck out the venom.',
            'Do NOT apply a tourniquet or ice to the bite.',
            'Do NOT give the victim alcohol or aspirin.',
            'Do NOT try to catch or kill the snake.',
            'Do NOT let the victim walk if they can be carried.',
        ],
        steps: [
            {
                title: 'Stay Calm & Move Away',
                description: 'Move the person away from the snake to a safe distance. Keep them as still and calm as possible to slow venom spread.',
                audioText: 'Step 1. Stay calm and move away from the snake. Keep the victim still to slow venom spread.',
                illustration: 'snake_step1',
            },
            {
                title: 'Call Emergency Services',
                description: 'Dial emergency services immediately. If possible, note the snake\'s appearance to help identify the species.',
                audioText: 'Step 2. Call emergency services immediately. Try to note the snake appearance for identification.',
                illustration: 'snake_step2',
            },
            {
                title: 'Immobilize the Limb',
                description: 'Keep the bitten limb below heart level. Apply a pressure immobilization bandage — wrap firmly but not tight enough to cut circulation.',
                audioText: 'Step 3. Keep the bitten limb below heart level. Apply a pressure immobilization bandage firmly but not too tight.',
                illustration: 'snake_step3',
            },
            {
                title: 'Remove Tight Items',
                description: 'Remove rings, watches, and tight clothing near the bite before swelling starts.',
                audioText: 'Step 4. Remove rings, watches, and tight clothing near the bite area before swelling begins.',
                illustration: 'snake_step4',
            },
            {
                title: 'Monitor & Wait',
                description: 'Keep the person calm and still. Monitor breathing and consciousness. Note the time of the bite. Wait for medical help.',
                audioText: 'Step 5. Keep the person calm and still. Monitor their breathing and consciousness. Note the time of the bite and wait for medical help.',
                illustration: 'snake_step5',
            },
        ],
    },

    burns: {
        id: 'burns',
        title: 'Burns (General)',
        emoji: '🔥',
        severity: 'High',
        color: '#ED8936',
        warning: [
            'Do NOT apply ice directly to the burn.',
            'Do NOT use butter, oil, or toothpaste on the burn.',
            'Do NOT break blisters.',
            'Do NOT remove clothing stuck to the burn.',
            'Do NOT cover with fluffy cotton or adhesive bandages.',
        ],
        steps: [
            {
                title: 'Stop the Burning',
                description: 'Remove the person from the heat source. If clothing is on fire, use stop-drop-roll. Remove clothing not stuck to the burn.',
                audioText: 'Step 1. Remove the person from the heat source. If clothing is on fire, stop drop and roll. Remove clothing that is not stuck to the burn.',
                illustration: 'burn_step1',
            },
            {
                title: 'Cool with Running Water',
                description: 'Hold the burned area under cool (not cold) running water for at least 20 minutes. This is the most important step.',
                audioText: 'Step 2. Hold the burned area under cool running water for at least 20 minutes. This is the most important treatment step.',
                illustration: 'burn_step2',
            },
            {
                title: 'Remove Items Gently',
                description: 'Carefully remove jewelry, belts, and tight items from the burned area before swelling begins.',
                audioText: 'Step 3. Carefully remove jewelry, belts, and tight items from the burned area before swelling begins.',
                illustration: 'burn_step3',
            },
            {
                title: 'Cover the Burn',
                description: 'Cover the burn loosely with a clean, non-fluffy cloth or cling wrap. Do not wrap tightly.',
                audioText: 'Step 4. Cover the burn loosely with a clean non-fluffy cloth or cling wrap. Do not wrap it tightly.',
                illustration: 'burn_step4',
            },
            {
                title: 'Seek Medical Help',
                description: 'Call emergency services for large burns, burns on face/hands/joints, or deep burns. Keep the person warm and comfortable.',
                audioText: 'Step 5. Call emergency services for large or deep burns, especially on face, hands or joints. Keep the person warm and comfortable.',
                illustration: 'burn_step5',
            },
        ],
    },

    burns_first: {
        id: 'burns_first',
        title: 'First Degree Burn',
        emoji: '🔥',
        severity: 'Medium',
        color: '#ED8936',
        warning: [
            'Do NOT apply ice or ice water directly.',
            'Do NOT use adhesive bandages on the skin.',
            'Do NOT apply butter, oil, or ointments.',
            'Do NOT pop any small blisters that form.',
            'Do NOT expose the area to direct sunlight during healing.',
        ],
        steps: [
            {
                title: 'Cool Under Running Water',
                description: 'Hold the burned area under cool (not cold) running water for 10–20 minutes. This reduces heat and prevents deeper damage.',
                audioText: 'Step 1. Hold the burned area under cool running water for 10 to 20 minutes. This reduces heat and prevents deeper damage.',
                illustration: 'burn_step2',
            },
            {
                title: 'Apply Aloe Vera or Moisturizer',
                description: 'After cooling, gently apply aloe vera gel or a gentle moisturizing lotion. This soothes the skin and promotes healing.',
                audioText: 'Step 2. After cooling, gently apply aloe vera gel or a gentle moisturizing lotion to soothe the skin.',
                illustration: 'burn_step4',
            },
            {
                title: 'Take Pain Relief',
                description: 'Over-the-counter pain relief like ibuprofen or acetaminophen can help. Follow dosage instructions on the label.',
                audioText: 'Step 3. Take over the counter pain relief like ibuprofen if needed. Follow the dosage instructions.',
                illustration: 'burn_step3',
            },
            {
                title: 'Cover Loosely',
                description: 'If the area might rub against clothing, cover with a sterile non-stick bandage. Keep it loose.',
                audioText: 'Step 4. If the area might rub against clothing, cover it loosely with a sterile non-stick bandage.',
                illustration: 'burn_step4',
            },
            {
                title: 'Monitor for 48 Hours',
                description: 'Watch for increased redness, swelling, or signs of infection. First degree burns typically heal within 7–10 days.',
                audioText: 'Step 5. Watch for increased redness, swelling, or signs of infection over 48 hours. First degree burns heal within 7 to 10 days.',
                illustration: 'burn_step5',
            },
        ],
    },

    burns_second: {
        id: 'burns_second',
        title: 'Second Degree Burn',
        emoji: '🔥',
        severity: 'High',
        color: '#DD6B20',
        warning: [
            'Do NOT pop or drain blisters — they protect healing skin.',
            'Do NOT apply ice directly to the burned area.',
            'Do NOT use butter, toothpaste, or home remedies.',
            'Do NOT wrap the burn tightly.',
            'Do NOT peel away dead or blistered skin.',
        ],
        steps: [
            {
                title: 'Cool Immediately',
                description: 'Hold the burned area under cool running water for at least 20 minutes. Start as soon as possible — every second counts.',
                audioText: 'Step 1. Hold the burned area under cool running water for at least 20 minutes. Start immediately, every second counts.',
                illustration: 'burn_step2',
            },
            {
                title: 'Do NOT Break Blisters',
                description: 'Blisters indicate second degree burns. They protect the raw skin underneath. Leave them intact.',
                audioText: 'Step 2. Do not break blisters. They protect the raw skin underneath and should be left intact.',
                illustration: 'burn_step1',
            },
            {
                title: 'Apply Sterile Dressing',
                description: 'Cover the burn with a sterile non-adhesive dressing or clean cling wrap. Keep it loose to allow air flow.',
                audioText: 'Step 3. Cover the burn with a sterile non-adhesive dressing or clean cling wrap. Keep it loose.',
                illustration: 'burn_step4',
            },
            {
                title: 'Elevate if Possible',
                description: 'If the burn is on a limb, elevate it above heart level to reduce swelling and pain.',
                audioText: 'Step 4. If the burn is on a limb, elevate it above heart level to reduce swelling and pain.',
                illustration: 'burn_step3',
            },
            {
                title: 'Seek Medical Attention',
                description: 'Second degree burns larger than 3 inches, or on face/hands/groin, require professional medical care. Call emergency services.',
                audioText: 'Step 5. Seek medical attention for burns larger than 3 inches or those on face, hands, or groin. Call emergency services.',
                illustration: 'burn_step5',
            },
        ],
    },

    burns_third: {
        id: 'burns_third',
        title: 'Third Degree Burn',
        emoji: '🔥',
        severity: 'High',
        color: '#C05621',
        warning: [
            'Do NOT remove clothing stuck to the burn.',
            'Do NOT immerse large burns in cold water — risk of hypothermia.',
            'Do NOT apply any creams, ointments, or sprays.',
            'Do NOT give the person anything to eat or drink.',
            'Do NOT use cotton or fluffy material to cover the burn.',
        ],
        steps: [
            {
                title: 'Call Emergency Services NOW',
                description: 'Third degree burns are life-threatening. Call emergency services (112) immediately. Do not delay.',
                audioText: 'Step 1. Third degree burns are life-threatening. Call emergency services at 112 immediately. Do not delay.',
                illustration: 'burn_step5',
            },
            {
                title: 'Protect the Area',
                description: 'Cover the burn loosely with a clean, dry, non-fluffy cloth or sterile sheet. Do not apply pressure.',
                audioText: 'Step 2. Cover the burn loosely with a clean dry cloth or sterile sheet. Do not apply any pressure.',
                illustration: 'burn_step4',
            },
            {
                title: 'Check for Breathing',
                description: 'If the burn involves the face, neck, or chest, monitor breathing carefully. Be prepared to perform CPR if needed.',
                audioText: 'Step 3. If the burn involves face, neck, or chest, monitor breathing carefully. Be prepared for CPR if needed.',
                illustration: 'burn_step1',
            },
            {
                title: 'Treat for Shock',
                description: 'Lay the person flat (if no spinal injury). Elevate legs slightly. Keep them warm with a blanket over unburned areas.',
                audioText: 'Step 4. Lay the person flat and elevate their legs slightly. Keep them warm with a blanket over unburned areas.',
                illustration: 'burn_step3',
            },
            {
                title: 'Do NOT Remove Stuck Clothing',
                description: 'If clothing is melted or stuck to the skin, do not pull it off. Cut around it carefully. Wait for paramedics.',
                audioText: 'Step 5. If clothing is stuck to the skin, do not pull it off. Cut around it carefully and wait for paramedics.',
                illustration: 'burn_step2',
            },
        ],
    },

    fracture: {
        id: 'fracture',
        title: 'Fracture',
        emoji: '🦴',
        severity: 'Medium',
        color: '#3182CE',
        warning: [
            'Do NOT try to realign the bone or push it back.',
            'Do NOT move the person unless absolutely necessary.',
            'Do NOT give the person food or drink (surgery may be needed).',
            'Do NOT apply direct pressure over the fracture site.',
            'Do NOT remove protective gear like a helmet.',
        ],
        steps: [
            {
                title: 'Keep Still & Assess',
                description: 'Do not move the injured limb. Look for swelling, deformity, bruising, or an open wound near the injury.',
                audioText: 'Step 1. Do not move the injured limb. Look for swelling, deformity, bruising, or an open wound near the injury.',
                illustration: 'fracture_step1',
            },
            {
                title: 'Call for Help',
                description: 'Call emergency services. Describe the injury location and whether bone is visible.',
                audioText: 'Step 2. Call emergency services. Describe the injury location and whether bone is visible.',
                illustration: 'fracture_step2',
            },
            {
                title: 'Immobilize the Area',
                description: 'Splint the injured area using stiff material (board, rolled newspaper). Pad with soft cloth. Secure above and below the fracture.',
                audioText: 'Step 3. Splint the injured area using stiff material like a board or rolled newspaper. Pad with soft cloth and secure above and below the fracture.',
                illustration: 'fracture_step3',
            },
            {
                title: 'Apply Ice Pack',
                description: 'Apply an ice pack wrapped in cloth to reduce swelling. Apply for 20 minutes on, 20 minutes off. Never apply ice directly.',
                audioText: 'Step 4. Apply an ice pack wrapped in cloth to reduce swelling. 20 minutes on, 20 minutes off. Never apply ice directly to skin.',
                illustration: 'fracture_step4',
            },
            {
                title: 'Monitor & Comfort',
                description: 'Keep the person still and warm. Elevate the injured area if possible. Monitor for shock — pale skin, rapid breathing.',
                audioText: 'Step 5. Keep the person still and warm. Elevate the injured area if possible. Watch for signs of shock such as pale skin and rapid breathing.',
                illustration: 'fracture_step5',
            },
        ],
    },

    heatstroke: {
        id: 'heatstroke',
        title: 'Heatstroke',
        emoji: '🌡',
        severity: 'High',
        color: '#ECC94B',
        warning: [
            'Do NOT give the person ice-cold water to drink.',
            'Do NOT leave the person unattended.',
            'Do NOT ignore confusion or unconsciousness — this is critical.',
            'Do NOT give any medication like aspirin for fever.',
            'Do NOT put the person in an ice bath without monitoring.',
        ],
        steps: [
            {
                title: 'Move to Shade',
                description: 'Move the person to a cool, shaded area or air-conditioned room immediately. Remove excess clothing.',
                audioText: 'Step 1. Move the person to a cool shaded area or air-conditioned room immediately. Remove excess clothing.',
                illustration: 'heat_step1',
            },
            {
                title: 'Call Emergency Services',
                description: 'Heatstroke is a medical emergency. Call emergency services immediately. Body temperature may be above 40°C (104°F).',
                audioText: 'Step 2. Heatstroke is a medical emergency. Call emergency services immediately. The body temperature may be above 40 degrees Celsius.',
                illustration: 'heat_step2',
            },
            {
                title: 'Cool the Body',
                description: 'Apply cool water to skin. Place wet cloths or ice packs on the neck, armpits, and groin. Fan the person.',
                audioText: 'Step 3. Apply cool water to skin. Place wet cloths or ice packs on the neck, armpits, and groin area. Fan the person to speed cooling.',
                illustration: 'heat_step3',
            },
            {
                title: 'Hydrate if Conscious',
                description: 'If the person is conscious and can swallow, give small sips of cool water. Do not give ice-cold water.',
                audioText: 'Step 4. If the person is conscious and able to swallow, give small sips of cool water. Do not give ice-cold water.',
                illustration: 'heat_step4',
            },
            {
                title: 'Monitor Closely',
                description: 'Watch for confusion, seizures, or loss of consciousness. Place in recovery position if unconscious. Continue cooling until help arrives.',
                audioText: 'Step 5. Watch for confusion, seizures, or loss of consciousness. Place the person in recovery position if unconscious. Continue cooling until help arrives.',
                illustration: 'heat_step5',
            },
        ],
    },
};

export default emergencies;
