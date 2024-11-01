// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    // Map Boundary
    ActivateHit(50304905, Enabled);
    
    //===============
    // Trial System
    //===============
    InitializeEvent(0, 3000, 0);
    
    //===============
    // Loot System
    //===============
    // Wave 1
    InitializeEvent(0, 3101, 100); 
    InitializeEvent(1, 3101, 101); 
    InitializeEvent(0, 3100, 102); 
    InitializeEvent(1, 3100, 103); 
    InitializeEvent(2, 3100, 104); 
    InitializeEvent(3, 3100, 105); 
    InitializeEvent(4, 3100, 106); 
    InitializeEvent(5, 3100, 107); 
    InitializeEvent(6, 3100, 108);
    InitializeEvent(7, 3100, 109);  
    
    // Wave 2
    InitializeEvent(2, 3101, 110); 
    InitializeEvent(3, 3101, 111); 
    InitializeEvent(4, 3101, 112); 
    InitializeEvent(5, 3101, 113); 
    InitializeEvent(6, 3101, 114); 
    InitializeEvent(7, 3101, 115); 
    InitializeEvent(8, 3101, 116); 
    InitializeEvent(9, 3101, 117); 
    InitializeEvent(10, 3101, 118); 
    
    // Wave 3
    InitializeEvent(8, 3100, 120);  
    InitializeEvent(9, 3100, 121);  
    InitializeEvent(10, 3100, 122);  
    InitializeEvent(11, 3100, 123);  
    InitializeEvent(12, 3100, 124);  
    InitializeEvent(13, 3100, 125);  
    InitializeEvent(14, 3100, 126);  
    InitializeEvent(15, 3100, 127);  
    InitializeEvent(16, 3100, 128);  
    InitializeEvent(17, 3100, 129);  
    InitializeEvent(18, 3100, 130);  
    InitializeEvent(19, 3100, 131);  
    InitializeEvent(20, 3100, 132);  
    InitializeEvent(21, 3100, 133);  
    InitializeEvent(22, 3100, 134);  
    InitializeEvent(23, 3100, 135);  
    InitializeEvent(24, 3100, 136);  
    InitializeEvent(11, 3101, 137);  
    InitializeEvent(12, 3101, 138);  
    InitializeEvent(13, 3101, 139);  
    
    // Wave 4
    InitializeEvent(14, 3101, 140);  
    InitializeEvent(15, 3101, 141);  
    InitializeEvent(16, 3101, 142);  
    
    // Wave 5
    InitializeEvent(0, 3102, 150); 
    InitializeEvent(25, 3100, 151);  
    InitializeEvent(26, 3100, 152);  
    InitializeEvent(27, 3100, 153);  
    InitializeEvent(28, 3100, 154);  
    InitializeEvent(29, 3100, 155);  
    InitializeEvent(30, 3100, 156);  
    InitializeEvent(31, 3100, 157);  
    InitializeEvent(32, 3100, 158);  
    InitializeEvent(33, 3100, 159);  
    InitializeEvent(34, 3100, 160);   
    InitializeEvent(35, 3100, 161);  
    InitializeEvent(36, 3100, 162);  
    InitializeEvent(37, 3100, 163);  
    InitializeEvent(38, 3100, 164);  
    InitializeEvent(39, 3100, 165);  
    InitializeEvent(40, 3100, 166);  
    InitializeEvent(41, 3100, 167);  
    InitializeEvent(42, 3100, 168);  
    InitializeEvent(43, 3100, 169);  
});

//=================================================
// Marker System - <wave group id>
//=================================================
Event(3200, Default, function(X0_4) {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 4592);
    ClearSpEffect(X0_4, 9991003);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 4592);
    SetSpEffect(X0_4, 9991003);
    
    EndUnconditionally(EventEndType.Restart);
});

//=================================================
// Trial System
//=================================================
Event(3000, Default, function() {
    ChangeCharacterEnableState(5300, Disabled);
    
    InitializeCommonEvent(6000, 0);
    
    WaitFixedTimeSeconds(5);
    
    //=================================================
    // Waves
    //=================================================
    // Wave 1 - Tetrapods + Guard Mechs
    InitializeEvent(0, 3001, 0);
    InitializeEvent(1, 3200, 5301);
    
    // Wave 2 - Light Cavalry
    InitializeEvent(0, 3002, 0);
    InitializeEvent(2, 3200, 5302);
    
    // Wave 3 - Spider MT + TOYBOX MT
    InitializeEvent(0, 3003, 0);
    InitializeEvent(3, 3200, 5303);
    
    // Wave 4 - Ekdromoi
    InitializeEvent(0, 3004, 0);
    InitializeEvent(4, 3200, 5304);
    
    // Wave 5 - Boss:
    InitializeEvent(0, 3005, 0);
    InitializeEvent(5, 3200, 5305);
    
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 4515);
    WaitFixedTimeSeconds(5);
    SetEventFlag(TargetEventFlagType.EventFlag, 4591, ON);
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
    ChangeCharacterEnableState(102, Enabled);
    ChangeCharacterEnableState(103, Enabled);
    ChangeCharacterEnableState(104, Enabled);
    ChangeCharacterEnableState(105, Enabled);
    
    WaitRandomTimeSeconds(1, 3);
    
    ChangeCharacterEnableState(101, Enabled);
    ChangeCharacterEnableState(106, Enabled);
    ChangeCharacterEnableState(107, Enabled);
    ChangeCharacterEnableState(108, Enabled);
    ChangeCharacterEnableState(109, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5301, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
    IfConditionGroup(MAIN, PASS, OR_01);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
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
    ChangeCharacterEnableState(111, Enabled);
    ChangeCharacterEnableState(112, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(113, Enabled);
    ChangeCharacterEnableState(114, Enabled);
    ChangeCharacterEnableState(115, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(116, Enabled);
    ChangeCharacterEnableState(117, Enabled);
    ChangeCharacterEnableState(118, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5302, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
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
    ChangeCharacterEnableState(137, Enabled);
    ChangeCharacterEnableState(120, Enabled);
    ChangeCharacterEnableState(123, Enabled);
    ChangeCharacterEnableState(126, Enabled);
    ChangeCharacterEnableState(129, Enabled);
    ChangeCharacterEnableState(132, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(138, Enabled);
    ChangeCharacterEnableState(121, Enabled);
    ChangeCharacterEnableState(124, Enabled);
    ChangeCharacterEnableState(127, Enabled);
    ChangeCharacterEnableState(130, Enabled);
    ChangeCharacterEnableState(133, Enabled);
    ChangeCharacterEnableState(135, Enabled);
    WaitRandomTimeSeconds(1, 3);
    ChangeCharacterEnableState(139, Enabled);
    ChangeCharacterEnableState(122, Enabled);
    ChangeCharacterEnableState(125, Enabled);
    ChangeCharacterEnableState(128, Enabled);
    ChangeCharacterEnableState(131, Enabled);
    ChangeCharacterEnableState(134, Enabled);
    ChangeCharacterEnableState(136, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5303, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
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
    ChangeCharacterEnableState(140, Enabled);
    ChangeCharacterEnableState(141, Enabled);
    ChangeCharacterEnableState(142, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(OR_01, 5304, DeathState.Dead, Equal, 1);
    IfElapsedSeconds(OR_01, 180);
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
    ChangeCharacterEnableState(150, Enabled);
    ChangeCharacterEnableState(151, Enabled);
    ChangeCharacterEnableState(152, Enabled);
    ChangeCharacterEnableState(153, Enabled);
    ChangeCharacterEnableState(154, Enabled);
    ChangeCharacterEnableState(155, Enabled);
    ChangeCharacterEnableState(156, Enabled);
    ChangeCharacterEnableState(157, Enabled);
    ChangeCharacterEnableState(158, Enabled);
    ChangeCharacterEnableState(159, Enabled);
    ChangeCharacterEnableState(160, Enabled);
    ChangeCharacterEnableState(161, Enabled);
    ChangeCharacterEnableState(162, Enabled);
    ChangeCharacterEnableState(163, Enabled);
    ChangeCharacterEnableState(164, Enabled);
    ChangeCharacterEnableState(165, Enabled);
    ChangeCharacterEnableState(166, Enabled);
    ChangeCharacterEnableState(167, Enabled);
    ChangeCharacterEnableState(168, Enabled);
    ChangeCharacterEnableState(169, Enabled);
    
    // Wave Duration
    IfCharacterRatioDeadalive(MAIN, 150, DeathState.Dead, Equal, 1);
    ChangeCharacterEnableState(5305, Disabled);
    
    // Wave End:
    DisplayTextEffectMessage(WaveEndText);
    WaitFixedTimeSeconds(2);
    EndTextEffectMessage(3);
    
    // Rest Time
    WaitFixedTimeSeconds(WaveIntermission);
    
    SetEventFlag(TargetEventFlagType.EventFlag, 4505, ON);
    SetEventFlag(TargetEventFlagType.EventFlag, 4515, ON);
});

//=================================================
// Loot System - Basic Enemies
//=================================================
Event(3100, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    BatchSetEventFlags(4800, 4899, OFF); 
    RandomlySetEventFlagInRange(4800, 4849, ON); // 2% chance
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Tough Enemies
//=================================================
Event(3101, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    BatchSetEventFlags(4800, 4899, OFF); 
    RandomlySetEventFlagInRange(4800, 4803, ON); // 25% chance
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 4800);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Bosses
//=================================================
Event(3102, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    InitializeCommonEvent(6010, 0);
});

//=================================================
// Loot System - Final Boss
//=================================================
Event(3103, Default, function(X0_4) {
    IfCharacterDeadalive(MAIN, X0_4, DeathState.Dead, Equal, 1);
    
    InitializeCommonEvent(6010, 0);
    
    // Special Item Here
});


