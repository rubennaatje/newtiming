<template>
  <section>
    <div class="grid grid-rows-3 grid-col gap-4">
      <SContainer class="row-span-3 " title="TV"> <Trackmap /></SContainer>
      <SContainer class="row-span-1 col-span-2" title="event info">
        <SpeedChart />
      </SContainer>

      <SContainer class="row-span-2 col-span-2" title="chat">
        <Carinfo />
      </SContainer>
      <SContainer class="row-span-2 col-span-3" title="commentary">
        <div class="h-5">
          Eric: The #11 just did a 2:01, could be catching ... if he keeps up
          that pace.
        </div>
        <div class="h-5">
          Jann: Well if he wants to catch up he needs to speed it up even more,
          ... is doing 2:02s at the moment.
        </div>
        <div class="h-5">
          Jann: Ooh there looks to be trouble with the #97, it slowed right
          down.
        </div>
        <div class="h-5">
          Eric: It's still moving luckily, now it's just time to get into the
          pits so they can try and fix this.
        </div>
        <div class="h-5">
          Jann: Hi Jackie, we heard you are with Rubennaatje, team manager of
          the #97.
        </div>
        <div class="h-5">
          Jackie: Hi Rubennaatje, really unfortunate stuff we saw on tv, car
          just got in, do you know what the issue is?
        </div>
        <div class="h-5">Rubennaatje: Just a puncture</div>
        <div class="h-5">Jackie: How long will it take to fix?</div>
        <div class="h-5">Rubennaatje: It's already fixed lol</div>
        <div class="h-5">Jackie: Okay thanks, back to you guys.</div>
        <div class="h-5">
          Eric: The battle for the lead in GTE pro is heating up, the #92 and
          #51 are right behind the #82.
        </div>
        <div class="h-5">
          Jann: Yes seems like nicky catsburg is struggling with the pace at the
          moment.
        </div>
        <div class="h-5">
          Eric: A new fastest lap for the #11, a 2:00. Very quick.
        </div>
      </SContainer>
    </div>
  </section>
</template>
