const calculateNextCutoffDates = () => {
    const startDate = new Date('2025-04-17');
    const today = new Date();
  
    today.setHours(0, 0, 0, 0);

    let nextCutoff = new Date(startDate);
    nextCutoff.setHours(0, 0, 0, 0);

  console.log(nextCutoff < today)
    while (nextCutoff < today) {
      console.log('today', today)

      console.log('nextCutoff in while', nextCutoff)
      nextCutoff.setDate(nextCutoff.getDate() + 14);
    }
  
    const followingCutoff = new Date(nextCutoff);
    followingCutoff.setDate(followingCutoff.getDate() + 14);

    console.log('today.getFullYear()', today.getFullYear())
    console.log('today.getMonth()', today.getMonth())
    console.log('today.getDate()', today.getDate())

    console.log('nextCutoff.getFullYear()', nextCutoff.getFullYear())
    console.log('nextCutoff.getMonth()', nextCutoff.getMonth())
    console.log('nextCutoff.getDate()', nextCutoff.getDate())


    console.log('nextCutoff', nextCutoff)
    console.log('followingCutoff', followingCutoff)

  
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
  console.log('cutoff=false');
} else {
  console.log(`✅ Today is a cutoff date. Proceeding with build.`);
  console.log('cutoff=true');
}
