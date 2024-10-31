// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    // DEBUG SPEFFECT
    //SetSpEffect(20000, 20000);
    
    //===============
    // Trial System
    //===============
    InitializeEvent(0, 3000, 0);
    
    //===============
    // Loot System
    //===============
    
    // Wave 1
    InitializeEvent(0, 3100, 100); 
    InitializeEvent(1, 3100, 101); 
    InitializeEvent(2, 3100, 102); 
    InitializeEvent(3, 3100, 103); 
    InitializeEvent(4, 3100, 104); 
    InitializeEvent(5, 3100, 105); 
    InitializeEvent(6, 3100, 106); 
    
    // Wave 2
    InitializeEvent(0, 3101, 110); 
    InitializeEvent(10, 3100, 111); 
    InitializeEvent(11, 3100, 112); 
    InitializeEvent(12, 3100, 113); 
    InitializeEvent(13, 3100, 114); 
    InitializeEvent(14, 3100, 115); 
    InitializeEvent(15, 3100, 116); 
    InitializeEvent(16, 3100, 117); 
    InitializeEvent(17, 3100, 118); 
    InitializeEvent(18, 3100, 119); 
    
    // Wave 3
    InitializeEvent(20, 3100, 120); 
    InitializeEvent(21, 3100, 121); 
    InitializeEvent(22, 3100, 122); 
    InitializeEvent(23, 3100, 123); 
    InitializeEvent(24, 3100, 124); 
    InitializeEvent(25, 3100, 125); 
    InitializeEvent(26, 3100, 126); 
    InitializeEvent(27, 3100, 127); 
    InitializeEvent(28, 3100, 128); 
    InitializeEvent(29, 3100, 129); 
    InitializeEvent(30, 3100, 130); 
    InitializeEvent(31, 3100, 131); 
    InitializeEvent(32, 3100, 132); 
    InitializeEvent(33, 3100, 133); 
    InitializeEvent(34, 3100, 134); 
    InitializeEvent(35, 3100, 135); 
    InitializeEvent(36, 3100, 136); 
    InitializeEvent(37, 3100, 137); 
    InitializeEvent(38, 3100, 138); 
    InitializeEvent(39, 3100, 139); 
    InitializeEvent(40, 3100, 140); 
    InitializeEvent(41, 3100, 141); 
    InitializeEvent(42, 3100, 142); 
    InitializeEvent(43, 3100, 143); 
    InitializeEvent(44, 3100, 144); 
    InitializeEvent(45, 3100, 145); 
    InitializeEvent(46, 3100, 146); 
    InitializeEvent(47, 3100, 147); 
    InitializeEvent(48, 3100, 148); 
    InitializeEvent(49, 3100, 149); 
    InitializeEvent(50, 3100, 150); 
    InitializeEvent(51, 3100, 151); 
    InitializeEvent(52, 3100, 152); 
    InitializeEvent(53, 3100, 153); 
    InitializeEvent(54, 3100, 154); 
    InitializeEvent(55, 3100, 155); 
    InitializeEvent(56, 3100, 156); 
    InitializeEvent(57, 3100, 157); 
    InitializeEvent(58, 3100, 158); 
    InitializeEvent(59, 3100, 159); 
    
    // Wave 4
    InitializeEvent(1, 3101, 160); 
    InitializeEvent(2, 3101, 161);
    InitializeEvent(3, 3101, 162);
    
    // Wave 5
    InitializeEvent(0, 3102, 170);
});


//=================================================
// Trial System
//=================================================
Event(3000, Default, function() {
    ChangeCharacterEnableState(5300, Disabled);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4500, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4501, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4502, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4503, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4504, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4505, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4506, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4507, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4508, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4509, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4510, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4511, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4512, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4513, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4514, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4515, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4516, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4517, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4518, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4519, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4520, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4521, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4522, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4523, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4524, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4525, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4526, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4527, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4528, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4529, OFF);
    SetEventFlag(TargetEventFlagType.EventFlag, 4530, OFF);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4590, OFF); // Resupply flag
    
    WaitFixedTimeSeconds(5);
    
    //WarpAssetToCharacter(900, 990, 1);
    
    //=================================================
    // Waves
    //=================================================
    // General Design:
    // Each wave has a unique set of enemies that spawn in.
    // The wave progresses once X enemies have been killed (X being the total count of enemies for the wave)
    // Every fifth wave is an 'boss' wave, which may be a boss or an AC encounter.
    // After this wave, a part is awarded to the player.
    
    // DEBUG FLAG
    // SetEventFlag(TargetEventFlagType.EventFlag, 4503, ON);
    
    // Wave 1 - Basic MT Wave
    InitializeEvent(0, 3001, 0);
    
    // Wave 2 - Light Cavalry + Basic MT Wave
    InitializeEvent(0, 3002, 0);
    
    // Wave 3 - Mass MT Wave
    InitializeEvent(0, 3003, 0);
    
    // Wave 4 - Light Cavalry * 3
    InitializeEvent(0, 3004, 0);
    
    // Wave 5 - Boss (Juggernaut)
    InitializeEvent(0, 3005, 0);
    
    // Wave 6
    
    // Wave 7
    
    // Wave 8
    
    // Wave 9
    
    // Wave 10 - Boss
    
    // Wave 11
    
    // Wave 12
    
    // Wave 13
    
    // Wave 14
    
    // Wave 15 - Boss
    
    // Wave 16
    
    // Wave 17
    
    // Wave 18
    
    // Wave 19
    
    // Wave 20 - Boss
    
    // End Trial
});

//=================================================
// Wave 1
//=================================================
Event(3001, Default, function() {
    const WaveStartText = 100;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(100, Enabled);
    ChangeCharacterEnableState(101, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(102, Enabled);
    ChangeCharacterEnableState(103, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(104, Enabled);
    ChangeCharacterEnableState(105, Enabled);
    WaitRandomTimeSeconds(1, 3);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5301, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 120);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    ChangeAssetEnableState(900, Enabled);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4501, ON);
});

//=================================================
// Wave 2
//=================================================
Event(3002, Default, function() {
    const WaveStartText = 101;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4501);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(110, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(111, Enabled);
    ChangeCharacterEnableState(112, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(113, Enabled);
    ChangeCharacterEnableState(114, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(115, Enabled);
    ChangeCharacterEnableState(116, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(117, Enabled);
    ChangeCharacterEnableState(118, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(119, Enabled);
    WaitRandomTimeSeconds(1, 3);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5302, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 120);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4502, ON);
});

//=================================================
// Wave 3
//=================================================
Event(3003, Default, function() {
    const WaveStartText = 102;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4502);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(120, Enabled);
    ChangeCharacterEnableState(130, Enabled);
    ChangeCharacterEnableState(140, Enabled);
    ChangeCharacterEnableState(150, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(121, Enabled);
    ChangeCharacterEnableState(131, Enabled);
    ChangeCharacterEnableState(141, Enabled);
    ChangeCharacterEnableState(151, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(122, Enabled);
    ChangeCharacterEnableState(132, Enabled);
    ChangeCharacterEnableState(142, Enabled);
    ChangeCharacterEnableState(152, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(123, Enabled);
    ChangeCharacterEnableState(133, Enabled);
    ChangeCharacterEnableState(143, Enabled);
    ChangeCharacterEnableState(153, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(124, Enabled);
    ChangeCharacterEnableState(134, Enabled);
    ChangeCharacterEnableState(144, Enabled);
    ChangeCharacterEnableState(154, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(125, Enabled);
    ChangeCharacterEnableState(135, Enabled);
    ChangeCharacterEnableState(145, Enabled);
    ChangeCharacterEnableState(155, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(126, Enabled);
    ChangeCharacterEnableState(136, Enabled);
    ChangeCharacterEnableState(146, Enabled);
    ChangeCharacterEnableState(156, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(127, Enabled);
    ChangeCharacterEnableState(137, Enabled);
    ChangeCharacterEnableState(147, Enabled);
    ChangeCharacterEnableState(157, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(128, Enabled);
    ChangeCharacterEnableState(138, Enabled);
    ChangeCharacterEnableState(148, Enabled);
    ChangeCharacterEnableState(158, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(129, Enabled);
    ChangeCharacterEnableState(139, Enabled);
    ChangeCharacterEnableState(149, Enabled);
    ChangeCharacterEnableState(159, Enabled);
    WaitRandomTimeSeconds(1, 3);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5303, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 120);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4503, ON);
});

//=================================================
// Wave 4
//=================================================
Event(3004, Default, function() {
    const WaveStartText = 103;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4503);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(160, Enabled);
    ChangeCharacterEnableState(161, Enabled);
    ChangeCharacterEnableState(162, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5304, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 120);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4504, ON);
});

//=================================================
// Wave 5
//=================================================
Event(3005, Default, function() {
    const WaveStartText = 104;
    const WaveIntermission = 15;
    const WaveEndText = 90;
    
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 4504);
    
    // Wave Start:
    DisplayTextEffectMessage(WaveStartText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Enemies to Spawn:
    ChangeCharacterEnableState(170, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(MAIN, 170, DeathState.Dead, Equal, 1);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4505, ON);
});

//=================================================
// Loot System - Basic Enemies
//=================================================
Event(3100, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    //===============
    // Determine Loot Award
    //===============
    BatchSetEventFlags(4800, 4899, OFF); // 1% chance
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeEvent(0, 3110, 0);
});

//=================================================
// Loot System - Tough Enemies
//=================================================
Event(3101, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    //===============
    // Determine Loot Award
    //===============
    BatchSetEventFlags(4800, 4809, OFF); // 10% chance
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeEvent(0, 3110, 0);
});

//=================================================
// Loot System - Bosses
//=================================================
Event(3102, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    InitializeEvent(0, 3110, 0);
});

//=================================================
// Award Item
//=================================================
Event(3110, Default, function() {
    BatchSetEventFlags(4600, 4916, OFF);
    RandomlySetEventFlagInRange(4600, 4916, ON);
    
    //===============
    // Loot: Booster
    //===============
    // BST-G2/P04
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4600);
    AwardItemLot(10000);
    // BC-0600 12345
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4601);
    AwardItemLot(10010);
    // ALULA/21E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4602);
    AwardItemLot(10020);
    // FLUEGEL/21Z
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4603);
    AwardItemLot(10030);
    // BUERZEL/21D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4604);
    AwardItemLot(10040);
    // BST-G2/P06SPD
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4605);
    AwardItemLot(10050);
    // BC-0200 GRIDWALKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4606);
    AwardItemLot(10060);
    // IB-C03B: NGI 001
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4607);
    AwardItemLot(10070);
    // IA-C01B: GILLS
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4608);
    AwardItemLot(10080);
    // AB-J-137 KIKAKU
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4609);
    AwardItemLot(10090);
    // BC-0400 MULE
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4610);
    AwardItemLot(10100);
    // BST-G1/P10
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4611);
    AwardItemLot(10110);
    
    //===============
    // Loot: FCS
    //===============
    // FCS-G1/P01
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4612);
    AwardItemLot(11000);
    // FCS-G2/P05
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4613);
    AwardItemLot(11010);
    // FCS-G2/P10SLT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4614);
    AwardItemLot(11020);
    // FCS-G2/P12SML
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4615);
    AwardItemLot(11030);
    // FC-006 ABBOT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4616);
    AwardItemLot(11040);
    // FC-008 TALBOT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4617);
    AwardItemLot(11050);
    // VE-21A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4618);
    AwardItemLot(11060);
    // VE-21B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4619);
    AwardItemLot(11070);
    // IA-C01F: OCELLUS
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4620);
    AwardItemLot(11080);
    // IB-C03F: WLT 001
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4621);
    AwardItemLot(11090);
    
    //===============
    // Loot: Generator
    //===============
    // AG-J-098 JOSO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4622);
    AwardItemLot(12000);
    // AG-E-013 YABA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4623);
    AwardItemLot(12010);
    // AG-T-005 HOKUSHI
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4624);
    AwardItemLot(12020);
    // DF-GN-02 LING-TAI
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4625);
    AwardItemLot(12030);
    // DF-GN-06 MING-TANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4626);
    AwardItemLot(12040);
    // DF-GN-08 SAN-TAI
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4627);
    AwardItemLot(12050);
    // VP-20S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4628);
    AwardItemLot(12060);
    // VP-20C
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4629);
    AwardItemLot(12070);
    // VP-20D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4630);
    AwardItemLot(12080);
    // VE-20A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4631);
    AwardItemLot(12090);
    // VE-20B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4632);
    AwardItemLot(12100);
    // VE-20C
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4633);
    AwardItemLot(12110);
    // IA-C01G: AORTA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4634);
    AwardItemLot(12120);
    // IB-C03G: NGI 000
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4635);
    AwardItemLot(12130);
    
    //===============
    // Loot: Head
    //===============
    // HD-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4636);
    AwardItemLot(13000);
    // HS-5000 APPETIZER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4637);
    AwardItemLot(13010);
    // HD-033M VERRILL
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4638);
    AwardItemLot(13020);
    // HD-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4639);
    AwardItemLot(13030);
    // DF-HD-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4640);
    AwardItemLot(13040);
    // NACHTREIHER/44E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4641);
    AwardItemLot(13050);
    // KASUAR/44Z
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4642);
    AwardItemLot(13060);
    // VP-44S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4643);
    AwardItemLot(13070);
    // VP-44D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4644);
    AwardItemLot(13080);
    // VE-44A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4645);
    AwardItemLot(13090);
    // VE-44B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4646);
    AwardItemLot(13100);
    // 20-081 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4647);
    AwardItemLot(13110);
    // 20-082 MIND BETA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4648);
    AwardItemLot(13120);
    // EL-TH-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4649);
    AwardItemLot(13130);
    // AH-J-124 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4650);
    AwardItemLot(13140);
    // HC-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4651);
    AwardItemLot(13150);
    // HC-2000 FINDER EYE
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4652);
    AwardItemLot(13160);
    // HC-2000/BC SHADE EYE
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4653);
    AwardItemLot(13170);
    // IB-C03H: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4654);
    AwardItemLot(13180);
    // IA-C01H: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4655);
    AwardItemLot(13190);
    // EL-PH-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4656);
    AwardItemLot(13200);
    // LAMMERGEIER/44F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4657);
    AwardItemLot(13210);
    // AH-J-124/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4658);
    AwardItemLot(13220);
    
    //===============
    // Loot: Core
    //===============
    // BD-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4659);
    AwardItemLot(14000);
    // BD-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4660);
    AwardItemLot(14010);
    // CS-5000 MAIN DISH
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4661);
    AwardItemLot(14020);
    // DF-BD-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4662);
    AwardItemLot(14030);
    // NACHTREIHER/40E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4663);
    AwardItemLot(14040);
    // VP-40S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4664);
    AwardItemLot(14050);
    // VE-40A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4665);
    AwardItemLot(14060);
    // 07-061 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4666);
    AwardItemLot(14070);
    // EL-TC-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4667);
    AwardItemLot(14080);
    // AC-J-120 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4668);
    AwardItemLot(14090);
    // CC-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4669);
    AwardItemLot(14100);
    // CC-2000 ORBITER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4670);
    AwardItemLot(14110);
    // IB-C03C: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4671);
    AwardItemLot(14120);
    // IA-C01C: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4672);
    AwardItemLot(14130);
    // EL-PC-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4673);
    AwardItemLot(14140);
    // LAMMERGEIER/40F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4674);
    AwardItemLot(14150);
    // AC-J-120/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4675);
    AwardItemLot(14160);
    
    //===============
    // Loot: Arms
    //===============
    // AR-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4676);
    AwardItemLot(15000);
    // AR-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4677);
    AwardItemLot(15010);
    // AS-5000 SALAD
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4678);
    AwardItemLot(15020);
    // DF-AR-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4679);
    AwardItemLot(15030);
    // DF-AR-09 TIAN-LAO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4680);
    AwardItemLot(15040);
    // NACHTREIHER/46E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4681);
    AwardItemLot(15050);
    // VP-46S
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4682);
    AwardItemLot(15060);
    // VP-46D
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4683);
    AwardItemLot(15070);
    // VE-46A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4684);
    AwardItemLot(15080);
    // 04-101 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4685);
    AwardItemLot(15090);
    // EL-TA-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4686);
    AwardItemLot(15100);
    // AA-J-123 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4687);
    AwardItemLot(15110);
    // AC-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4688);
    AwardItemLot(15120);
    // AC-2000 TOOL ARM
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4689);
    AwardItemLot(15130);
    // IB-C03A: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4690);
    AwardItemLot(15140);
    // IA-C01A: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4691);
    AwardItemLot(15150);
    // EL-PA-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4692);
    AwardItemLot(15160);
    // LAMMERGEIER/46F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4693);
    AwardItemLot(15170);
    // AA-J-123/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4694);
    AwardItemLot(15180);
    
    //===============
    // Loot: Legs
    //===============
    // LG-011 MELANDER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4695);
    AwardItemLot(16000);
    // LG-012 MELANDER C3
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4696);
    AwardItemLot(16010);
    // 2S-5000 DESSERT
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4697);
    AwardItemLot(16020);
    // DF-LG-08 TIAN-QIANG
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4698);
    AwardItemLot(16030);
    // NACHTREIHER/42E
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4699);
    AwardItemLot(16040);
    // VP-422
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4700);
    AwardItemLot(16050);
    // VE-42A
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4701);
    AwardItemLot(16060);
    // 06-041 MIND ALPHA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4701);
    AwardItemLot(16070);
    // EL-TL-10 FIRMEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4702);
    AwardItemLot(16080);
    // AL-J-121 BASHO
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4703);
    AwardItemLot(16090);
    // 2C-3000 WRECKER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4704);
    AwardItemLot(16100);
    // 2C-2000 CRAWLER
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4705);
    AwardItemLot(16110);
    // IB-C03L: HAL 826
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4706);
    AwardItemLot(16120);
    // IA-C01L: EPHEMERA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4707);
    AwardItemLot(16130);
    // EL-PL-00 ALBA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4708);
    AwardItemLot(16140);
    // AL-J-121/RC JAILBREAK
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4709);
    AwardItemLot(16150);
    // KASUAR/42Z
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4710);
    AwardItemLot(16160);
    // 06-042 MIND BETA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4711);
    AwardItemLot(16170);
    // RC-2000 SPRING CHICKEN
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4712);
    AwardItemLot(16180);
    // LG-033M VERRILL
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4713);
    AwardItemLot(16190);
    // VP-424
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4714);
    AwardItemLot(16200);
    // LAMMERGEIER/42F
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4715);
    AwardItemLot(16210);
    // LG-022T BORNEMISSZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4716);
    AwardItemLot(16220);
    // VE-42B
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4717);
    AwardItemLot(16230);
    // EL-TL-11 FORTALEZA
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4718);
    AwardItemLot(16240);
    
    //===============
    // Loot: Weapons
    //===============
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4719);
    AwardItemLot(17000);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4720);
    AwardItemLot(17010);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4721);
    AwardItemLot(17020);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4722);
    AwardItemLot(17030);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4723);
    AwardItemLot(17040);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4724);
    AwardItemLot(17050);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4725);
    AwardItemLot(17060);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4726);
    AwardItemLot(17070);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4727);
    AwardItemLot(17080);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4728);
    AwardItemLot(17090);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4729);
    AwardItemLot(17100);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4730);
    AwardItemLot(17110);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4731);
    AwardItemLot(17120);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4732);
    AwardItemLot(17130);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4733);
    AwardItemLot(17140);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4734);
    AwardItemLot(17150);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4735);
    AwardItemLot(17160);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4736);
    AwardItemLot(17170);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4737);
    AwardItemLot(17180);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4738);
    AwardItemLot(17190);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4739);
    AwardItemLot(17200);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4740);
    AwardItemLot(17210);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4741);
    AwardItemLot(17220);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4742);
    AwardItemLot(17230);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4743);
    AwardItemLot(17240);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4744);
    AwardItemLot(17250);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4745);
    AwardItemLot(17260);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4746);
    AwardItemLot(17270);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4747);
    AwardItemLot(17280);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4748);
    AwardItemLot(17290);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4749);
    AwardItemLot(17300);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4750);
    AwardItemLot(17310);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4751);
    AwardItemLot(17320);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4752);
    AwardItemLot(17330);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4753);
    AwardItemLot(17340);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4754);
    AwardItemLot(17350);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4755);
    AwardItemLot(17360);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4756);
    AwardItemLot(17370);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4757);
    AwardItemLot(17380);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4758);
    AwardItemLot(17390);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4759);
    AwardItemLot(17400);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4760);
    AwardItemLot(17410);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4761);
    AwardItemLot(17420);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4762);
    AwardItemLot(17430);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4763);
    AwardItemLot(17440);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4764);
    AwardItemLot(17450);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4765);
    AwardItemLot(17460);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4766);
    AwardItemLot(17470);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4767);
    AwardItemLot(17480);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4768);
    AwardItemLot(17490);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4769);
    AwardItemLot(17500);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4770);
    AwardItemLot(17510);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4771);
    AwardItemLot(17520);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4772);
    AwardItemLot(17530);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4773);
    AwardItemLot(17540);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4774);
    AwardItemLot(17550);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4775);
    AwardItemLot(17560);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4776);
    AwardItemLot(17570);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4777);
    AwardItemLot(17580);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4778);
    AwardItemLot(17590);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4779);
    AwardItemLot(17600);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4780);
    AwardItemLot(17610);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4781);
    AwardItemLot(17620);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4782);
    AwardItemLot(17630);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4783);
    AwardItemLot(17640);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4784);
    AwardItemLot(17650);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4785);
    AwardItemLot(17660);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4786);
    AwardItemLot(17670);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4787);
    AwardItemLot(17680);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4788);
    AwardItemLot(17690);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4789);
    AwardItemLot(17700);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4790);
    AwardItemLot(17710);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4791);
    AwardItemLot(17720);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4792);
    AwardItemLot(17730);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4793);
    AwardItemLot(17740);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4794);
    AwardItemLot(17750);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4795);
    AwardItemLot(17760);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4796);
    AwardItemLot(17770);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4797);
    AwardItemLot(17780);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4798);
    AwardItemLot(17790);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4799);
    AwardItemLot(17800);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4800);
    AwardItemLot(17810);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4801);
    AwardItemLot(17820);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4802);
    AwardItemLot(17830);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4803);
    AwardItemLot(17840);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4804);
    AwardItemLot(17850);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4805);
    AwardItemLot(17860);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4806);
    AwardItemLot(17870);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4807);
    AwardItemLot(17880);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4808);
    AwardItemLot(17890);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4809);
    AwardItemLot(17900);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4810);
    AwardItemLot(17910);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4811);
    AwardItemLot(17920);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4812);
    AwardItemLot(17930);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4813);
    AwardItemLot(17940);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4814);
    AwardItemLot(17950);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4815);
    AwardItemLot(17960);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4816);
    AwardItemLot(17970);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4817);
    AwardItemLot(17980);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4818);
    AwardItemLot(17990);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4819);
    AwardItemLot(18000);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4820);
    AwardItemLot(18010);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4821);
    AwardItemLot(18020);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4822);
    AwardItemLot(18030);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4823);
    AwardItemLot(18040);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4824);
    AwardItemLot(18050);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4825);
    AwardItemLot(18060);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4826);
    AwardItemLot(18070);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4827);
    AwardItemLot(18080);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4828);
    AwardItemLot(18090);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4829);
    AwardItemLot(18100);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4830);
    AwardItemLot(18110);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4831);
    AwardItemLot(18120);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4832);
    AwardItemLot(18130);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4833);
    AwardItemLot(18140);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4834);
    AwardItemLot(18150);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4835);
    AwardItemLot(18160);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4836);
    AwardItemLot(18170);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4837);
    AwardItemLot(18180);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4838);
    AwardItemLot(18190);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4839);
    AwardItemLot(18200);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4840);
    AwardItemLot(18210);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4841);
    AwardItemLot(18220);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4842);
    AwardItemLot(18230);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4843);
    AwardItemLot(18240);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4844);
    AwardItemLot(18250);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4845);
    AwardItemLot(18260);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4846);
    AwardItemLot(18270);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4847);
    AwardItemLot(18280);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4848);
    AwardItemLot(18290);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4849);
    AwardItemLot(18300);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4850);
    AwardItemLot(18310);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4851);
    AwardItemLot(18320);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4852);
    AwardItemLot(18330);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4853);
    AwardItemLot(18340);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4854);
    AwardItemLot(18350);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4855);
    AwardItemLot(18360);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4856);
    AwardItemLot(18370);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4857);
    AwardItemLot(18380);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4858);
    AwardItemLot(18390);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4859);
    AwardItemLot(18400);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4860);
    AwardItemLot(18410);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4861);
    AwardItemLot(18420);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4862);
    AwardItemLot(18430);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4863);
    AwardItemLot(18440);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4864);
    AwardItemLot(18450);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4865);
    AwardItemLot(18460);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4866);
    AwardItemLot(18470);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4867);
    AwardItemLot(18480);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4868);
    AwardItemLot(18490);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4869);
    AwardItemLot(18500);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4870);
    AwardItemLot(18510);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4871);
    AwardItemLot(18520);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4872);
    AwardItemLot(18530);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4873);
    AwardItemLot(18540);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4874);
    AwardItemLot(18550);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4875);
    AwardItemLot(18560);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4876);
    AwardItemLot(18570);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4877);
    AwardItemLot(18580);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4878);
    AwardItemLot(18590);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4879);
    AwardItemLot(18600);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4880);
    AwardItemLot(18610);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4881);
    AwardItemLot(18620);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4882);
    AwardItemLot(18630);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4883);
    AwardItemLot(18640);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4884);
    AwardItemLot(18650);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4885);
    AwardItemLot(18660);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4886);
    AwardItemLot(18670);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4887);
    AwardItemLot(18680);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4888);
    AwardItemLot(18690);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4889);
    AwardItemLot(18700);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4890);
    AwardItemLot(18710);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4891);
    AwardItemLot(18720);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4892);
    AwardItemLot(18730);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4893);
    AwardItemLot(18740);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4894);
    AwardItemLot(18750);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4895);
    AwardItemLot(18760);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4896);
    AwardItemLot(18770);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4897);
    AwardItemLot(18780);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4898);
    AwardItemLot(18790);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4899);
    AwardItemLot(18800);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4900);
    AwardItemLot(18810);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4901);
    AwardItemLot(18820);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4902);
    AwardItemLot(18830);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4903);
    AwardItemLot(18840);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4904);
    AwardItemLot(18850);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4905);
    AwardItemLot(18860);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4906);
    AwardItemLot(18870);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4907);
    AwardItemLot(18880);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4908);
    AwardItemLot(18890);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4909);
    AwardItemLot(18900);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4910);
    AwardItemLot(18910);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4911);
    AwardItemLot(18920);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4912);
    AwardItemLot(18930);
    
    //===============
    // Loot: Expansion
    //===============
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4913);
    AwardItemLot(19000);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4914);
    AwardItemLot(19010);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4915);
    AwardItemLot(19020);
    // XXX
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4916);
    AwardItemLot(19030);
    
});
