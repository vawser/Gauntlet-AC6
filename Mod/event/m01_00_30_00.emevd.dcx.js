// ==EMEVD==
// @docs    ac6-common.emedf.json
// @compress    DCX_KRAK_MAX
// @game    Sekiro
// @string    "W:\\FNR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.4.2
// ==/EMEVD==

Event(0, Default, function() {
    EndEventEsd(0, 5401, 0);
    EndEventEsd(0, 5402, 0);
    EndEventEsd(0, 5403, 0);
    EndEventEsd(0, 5404, 0);
    EndEventEsd(0, 5405, 0);
    EndEventEsd(0, 5413, 0);
    EndEventEsd(0, 5414, 0);
    EndEventEsd(0, 5415, 0);
    EndEventEsd(0, 5424, 0);
    EndEventEsd(0, 5425, 0);
    EndEventEsd(0, 5460, 0);
    EndEventEsd(0, 5461, 0);
    EndEventEsd(0, 5462, 0);
    EndEventEsd(0, 5431, 0);
    EndEventEsd(0, 5300, 200010, 0);
    EndEventEsd(0, 5470, 0);
    EndEventEsd(0, 5480, 0);
    EndEventEsd(0, 5481, 0);
    
    // Triggered when ESD node with ID is entered?
    InitializeEventEsd(0, 2000, 0);
    InitializeEventEsd(0, 2400, 0);
    InitializeEventEsd(0, 2410, 0);
    InitializeEventEsd(0, 2500, 0);
    InitializeEventEsd(0, 2501, 0);
    InitializeEventEsd(0, 2502, 0);
    InitializeEventEsd(0, 2503, 0);
    InitializeEventEsd(0, 2510, 0);
    InitializeEventEsd(0, 2520, 0);
    InitializeEventEsd(0, 2600, 0);
    InitializeEventEsd(0, 2601, 0);
    InitializeEventEsd(0, 2610, 0);
    InitializeEventEsd(0, 2611, 0);
    InitializeEventEsd(0, 2620, 0);
    InitializeEventEsd(0, 2621, 0);
    InitializeEventEsd(0, 2630, 0);
    InitializeEventEsd(0, 2631, 0);
    InitializeEventEsd(0, 2700, 0);
    InitializeEventEsd(0, 2800, 0);
    InitializeEventEsd(0, 2900, 0);
    InitializeEventEsd(0, 3000, 0);
    InitializeEventEsd(0, 3001, 0);
    InitializeEventEsd(0, 3002, 0);
    InitializeEventEsd(0, 3010, 0);
    InitializeEventEsd(0, 3020, 0);
    InitializeEventEsd(0, 3030, 0);
    InitializeEventEsd(0, 3031, 0);
    
    // AC Test Lights - Spawn-in Visual Effect
    InitializeEvent(0, 2200, 901200);
    InitializeEvent(1, 2200, 901201);
    InitializeEvent(2, 2200, 901202);
    InitializeEvent(3, 2200, 901203);
    InitializeEvent(4, 2200, 901210);
    InitializeEvent(5, 2200, 901211);
    InitializeEvent(6, 2200, 901220);
    InitializeEvent(7, 2200, 901230);
    InitializeEvent(8, 2200, 901240);
    InitializeEvent(9, 2200, 901250);
    InitializeEvent(10, 2200, 901260);
    
    // AC Test Room
    InitializeEvent(0, 2201, 0);
    
    // Sound on Player
    InitializeEvent(0, 2202, 0);
    
    Unknown201213(900000, 0, 0);
    
    InitializeEventEsd(0, 3700, 0);
    
    InitializeEvent(0, 1000, 0);
});

// TEST
Event(1000, Restart, function() {
    
});

Event(2000, Default, function() {
    SetSpEffect(0, 0);
    SetCharacterImmortality(20000, Enabled);
    ChangeCharacterEnableState(5300, Disabled);
});

// AC Test Lights - Spawn-in Visual Effect
Event(2200, Default, function(X0_4) {
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, 100, false, true, false, Equal, 1);
    ForceAnimationPlayback(X0_4, 101, true, false, false, Equal, 1);
});

// AC Test Room - Animations
Event(2201, Default, function() {
    WaitFixedTimeFrames(1);
    
    // AC Test Room (Asset) - Floor effect?
    ForceAnimationPlayback(901260, 100, false, true, false, Equal, 1);
    
    Unknown201214(0, 1073741824);
    
    // AC Test Room (Asset) - Floor effect?
    ForceAnimationPlayback(901260, 101, true, false, false, Equal, 1);
});

// Sound on Player
Event(2202, Default, function() {
    WaitFixedTimeSeconds(1);
    PlaySE(20000, SoundType.EnvironmentalSound, 810);
});

// Spawnables: 
Event(2400, Default, function() {
    ClearSpEffect(5300, 9100000);
    ClearSpEffect(5300, 30207000);
    IfElapsedSeconds(MAIN, 1);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302630);
    EndUnconditionally(EventEndType.Restart);
});

// Spawnables: 
Event(2410, Default, function() {
    SetSpEffect(5300, 9100000);
    SetSpEffect(5300, 30207000);
    IfElapsedSeconds(MAIN, 1);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302631);
    EndUnconditionally(EventEndType.Restart);
});

// Spawnables: Group - Disable and Kill
Event(2500, Default, function() {
    ChangeCharacterEnableState(5300, Disabled);
    IfElapsedSeconds(MAIN, 1);
    ForceCharacterDeath(5300, true);
});

// Spawnables: Light MTs + Helicopter Drones - Disable and Kill
Event(2501, Default, function() {
    ChangeCharacterEnableState(300, Disabled);
    ChangeCharacterEnableState(310, Disabled);
    ChangeCharacterEnableState(320, Disabled);
    ChangeCharacterEnableState(301, Disabled);
    ChangeCharacterEnableState(311, Disabled);
    ChangeCharacterEnableState(321, Disabled);
    ChangeCharacterEnableState(350, Disabled);
    ChangeCharacterEnableState(351, Disabled);
    ChangeCharacterEnableState(360, Disabled);
    ChangeCharacterEnableState(361, Disabled);
    IfElapsedSeconds(MAIN, 1);
    ForceCharacterDeath(300, false);
    ForceCharacterDeath(310, false);
    ForceCharacterDeath(320, false);
    ForceCharacterDeath(301, false);
    ForceCharacterDeath(311, false);
    ForceCharacterDeath(321, false);
    ForceCharacterDeath(350, false);
    ForceCharacterDeath(351, false);
    ForceCharacterDeath(360, false);
    ForceCharacterDeath(361, false);
});

// Spawnables: BAWS Tetrapod MT - Disable and Kill
Event(2502, Default, function() {
    ChangeCharacterEnableState(330, Disabled);
    ChangeCharacterEnableState(331, Disabled);
    IfElapsedSeconds(MAIN, 1);
    ForceCharacterDeath(330, false);
    ForceCharacterDeath(331, false);
});

// Spawnables: Trainer AC - Disable and Kill
Event(2503, Default, function() {
    ChangeCharacterEnableState(340, Disabled);
    ChangeCharacterEnableState(341, Disabled);
    IfElapsedSeconds(MAIN, 1);
    ForceCharacterDeath(340, false);
    ForceCharacterDeath(341, false);
});

// Warp Player to Room Centre
Event(2510, Default, function() {
    Unknown20031046(1300);
    IssueShortWarpRequest(20000, TargetEntityType.Area, 1300, -1);
});

Event(2520, Default, function() {
    SetEventFlagAc(2100302700, 0);
});

Event(2600, Default, function() {
    SetEventFlagAc(2100302601, 0);
    Unknown20041033(300, 1, 1073741824); // 2
    Unknown20041033(310, 1, 1073741824); // 2
    Unknown20041033(320, 1, 1073741824); // 2
    Unknown20041033(350, 1, 1073741824); // 2
    Unknown20041033(360, 1, 1073741824); // 2
});

Event(2601, Default, function() {
    SetEventFlagAc(2100302600, 0);
});

Event(2610, Default, function() {
    SetEventFlagAc(2100302611, 0);
    Unknown20041033(330, 1, 1073741824); // 2
});

Event(2611, Default, function() {
    SetEventFlagAc(2100302610, 0);
});

Event(2620, Default, function() {
    SetEventFlagAc(2100302621, 0);
    Unknown20041033(340, 1, 1073741824); // 2
});

Event(2621, Default, function() {
    SetEventFlagAc(2100302620, 0);
});

Event(2630, Default, function() {
    SetEventFlagAc(2100302631, 0);
});

Event(2631, Default, function() {
    SetEventFlagAc(2100302630, 0);
});

Event(2700, Default, function() {
    SetEventFlagAc(2100302520, 0);
    IfCharacterRatioDeadalive(MAIN, 5300, DeathState.Alive, NotEqual, 1);
    SetSpEffect(0, 0);
});

// Player Re-Supply
Event(2800, Default, function() {
    IfCharacterHPValue(MAIN, 20000, Equal, 1, Equal, 1);
    SetSpEffect(20000, 9100100);
    EndUnconditionally(EventEndType.Restart);
});

Event(2900, Default, function() {
    IfCharacterHasSpEffect(MAIN, 20000, 500000005, false, Equal, 1);
    SetSpEffect(20000, 500000005);
    EndUnconditionally(EventEndType.Restart);
});

// Spawn: Light MTs
Event(3000, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4000); // Light MT Generator
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 300, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4006); // Light MT Generator
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 301, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

// Spawn: Light MTs
Event(3001, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4001);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 310, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4007);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 311, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

// Spawn: Light MTs
Event(3002, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4002);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 320, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4008);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 321, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

// Spawn: BAWS Tetrapod MT
Event(3010, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302610);
    InvokeEnemyGenerator(4010);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 330, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302610);
    InvokeEnemyGenerator(4016);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 331, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

// Spawn: Trainer AC
Event(3020, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302620);
    InvokeEnemyGenerator(4020);
    IfElapsedFrames(MAIN, 2);
    SetNetworkUpdateRate(340, true, CharacterUpdateFrequency.AtLeastEvery5Frames);
    IfCharacterDeadalive(MAIN, 340, DeathState.Dead, Equal, 1);
    SetNetworkUpdateRate(340, true, CharacterUpdateFrequency.AtLeastEvery5Frames);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302620);
    InvokeEnemyGenerator(4026);
    IfElapsedFrames(MAIN, 2);
    SetNetworkUpdateRate(341, true, CharacterUpdateFrequency.AtLeastEvery5Frames);
    IfCharacterDeadalive(MAIN, 341, DeathState.Dead, Equal, 1);
    SetNetworkUpdateRate(341, true, CharacterUpdateFrequency.AtLeastEvery5Frames);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

// Spawn: Helicopter Drones
Event(3030, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4030);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 350, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4036);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 351, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

// Spawn: Helicopter Drones
Event(3031, Default, function() {
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4031);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 360, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 2100302600);
    InvokeEnemyGenerator(4037);
    IfElapsedFrames(MAIN, 2);
    SetSpEffect(0, 0);
    IfCharacterDeadalive(MAIN, 361, DeathState.Dead, Equal, 1);
    SetSpEffect(0, 0);
    IfElapsedSeconds(MAIN, 2);
    SetSpEffect(0, 0);
    EndUnconditionally(EventEndType.Restart);
});

Event(3700, Default, function() {
    SetSpEffect(0, 0);
});
