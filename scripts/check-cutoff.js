const calculateNextCutoffDates = () => {
    const startDate = new Date('2025-04-18');
    const today = new Date();
  
    let nextCutoff = new Date(startDate);
    while (nextCutoff < today) {
      nextCutoff.setDate(nextCutoff.getDate() + 14);
    }
  
    const followingCutoff = new Date(nextCutoff);
    followingCutoff.setDate(followingCutoff.getDate() + 14);
  
    return {
      isTodayCutoff:
        today.getFullYear() === nextCutoff.getFullYear() &&
        today.getMonth() === nextCutoff.getMonth() &&
        today.getDate() === nextCutoff.getDate(),
      nextCutoff,
      followingCutoff,
    };
  };
  
  const { isTodayCutoff, nextCutoff } = calculateNextCutoffDates();
  
  if (!isTodayCutoff) {
    console.log(`🛑 Skipping build. Today is not a cutoff date. Next is: ${nextCutoff}`);
    process.exit(0); // Exit successfully, but stop further jobs
  } else {
    console.log(`✅ Today is a cutoff date. Proceeding with build.`);
  }
  