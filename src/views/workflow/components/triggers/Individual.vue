<template>
  <div class="container">
    <div>
      <div class="row mt-5">
        <div class="col">
          <label for="" class="font-weight-700"
            >Match a Individual who has been in</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Dropdown
            :options="[
              'Prayer Team',
              'Welfare Team',
              'Ushering Team',
              'Music Team',
              'Security Team',
              'Sanctuary Keepers',
            ]"
            v-model="role"
            placeholder="These Groups..."
            style="width: 100%"
          />
        </div>
      </div>
    </div>

    <div>
      <div class="row mt-4">
        <div class="col">
          <label for="" class="font-weight-700"
            >Choose Events</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Dropdown
            :options="[
              'Birthday',
              'Date Died',
              'Baptism Date',
              'Last Attended',
              'Last Activity',
              'Last Contributed',
              'Last Backgroundcheck',
            ]"
            v-model="role"
            placeholder="Birthday"
            style="width: 100%"
          />
        </div>
      </div>
    </div>

    <div>
      <div class="row mt-4">
        <div class="col">
          <label for="" class="font-weight-700"
            >Treat this event as an anniversary</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Dropdown
            :options="[
              'No',
              'Yes',
            ]"
            v-model="role"
            placeholder="No"
            style="width: 100%"
          />
        </div>
      </div>
    </div>

      <div>
      <div class="row mt-4">
        <div class="col">
          <label for="" class="font-weight-700"
            >When the event is (use 0 for "today")</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Dropdown
            :options="[
              '1',
              '2',
                '3',
              '4',
                '5',
              '6',
            ]"
            v-model="role"
            placeholder="0"
            style="width: 100%"
          />
        </div>
      </div>
    </div>

       <div>
      <div class="row mt-4">
        <div class="col">
          <label for="" class="font-weight-700"
            >Days</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Dropdown
            :options="[
              'Days',
              'Weeks',
                'Months',
              'Years',
            ]"
            v-model="role"
            placeholder="Weeks"
            style="width: 100%"
          />
        </div>
      </div>
    </div>

          <div>
      <div class="row mt-4">
        <div class="col">
          <label for="" class="font-weight-700"
            >In the future</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <Dropdown
            :options="[
              'In the future',
              'In the past',
            ]"
            v-model="role"
            placeholder="In the future"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
export default {
  components: {
    Dropdown,
  },
  setup() {
    return {
      // Dropdown,
    };
  },
};
</script>