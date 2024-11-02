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
    ChangeCharacterEnableState(100, Disabled);
    
    InitializeCommonEvent(6000, 0);
    
    //WaitFixedTimeSeconds(5);
    
    //=================================================
    // Waves
    //=================================================
    // Wave 1 - 
    InitializeEvent(0, 3001, 0);
    InitializeEvent(1, 3200, 5301);
});

//=================================================
// Generator Test
//=================================================
Event(3001, Default, function() {
    IfEnemyActionButton(MAIN, 0, 0, 0, 295);
    DisplayTextEffectMessage(10);
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
