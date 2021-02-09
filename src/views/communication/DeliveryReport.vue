<template>
  <div>
    <div class="container pb-5">
      <div class="row mt-3 mb-4">
        <div class="col-md-12">
          <router-link to="/tenant/sms/sent" class="d-flex text-decoration-none">
            <span class="mr-2"><i class="fa fa-arrow-left back-icon"></i></span>
            <span> Back</span>
          </router-link>
        </div>
      </div>

      <div class="row grey-border py-2">
        <div class="col-md-4">
          <div class="row my-3">
            <div class="col-md-12 d-flex flex-column">
              <span>Status</span>
              <span class="status" v-if="!finished">Unfinished</span>
              <span class="status bg-success" v-else>Finished</span>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-md-12 d-flex flex-column">
              <span class="font-weight-bold units-used">{{ units }}</span>
              <span class="units-text">SMS UNIT USED</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
            <ReportChart domId="reportChart" title="" :height="400" :summary="statsData" :percentage="false" />
        </div>
        <div class="col-md-4">
          <SecondChart domId="reportBarChart" title="" :height="400" :summary="chartData" :percentage="true" />
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12">
          <div class="row theader light-grey-bg py-2 font-weight-700">
            <div class="col-md-3">
              <span>RECIPIENT NAME</span>
            </div>
            <div class="col-md-3">
              <span>NUMBER</span>
            </div>
            <div class="col-md-3">
              <span>STATUS</span>
            </div>
            <div class="col-md-3">
              <span>DATE & TIME</span>
            </div>
          </div>
        </div>

        <div class="col-md-12 px-0">
          <hr class="hr mt-0" />
        </div>
      </div>

      <div class="row" v-for="(message, index) in messages" :key="index">
        <div class="col-md-12 py-2">
          <div class="row">
            <div class="col-md-3">
              <span class="hidden-header">RECIPIENT NAME</span>
              <span>{{ message.name }}</span>
            </div>
            <div class="col-md-3">
              <span class="hidden-header">RECIPIENT NUMBER</span>
              <span>{{ message.recipient }}</span>
            </div>
            <div class="col-md-3 text-md-center">
              <span class="hidden-header">DELIVERY STATUS</span>
              <span v-if="message.deliveryReport === 'sent'">
                <Tag
                  class="p-mr-2"
                  severity="success"
                  :value="message.deliveryReport"
                  rounded
                ></Tag>
              </span>
              <span v-else-if="message.deliveryReport === 'failed'">
                <Tag
                  class="p-mr-2"
                  severity="error"
                  :value="message.deliveryReport"
                  rounded
                ></Tag>
              </span>
              <span v-else>
                <Tag
                  class="p-mr-2"
                  severity="warning"
                  :value="message.deliveryReport"
                  rounded
                ></Tag>
              </span>
            </div>
            <div class="col-md-3">
              <span class="hidden-header">DATE & TIME</span>
              <span>{{ new Date(message.date).toLocaleString() }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-12 px-0">
          <hr class="hr" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReportChart from "@/components/charts/BarChart.vue";
import SecondChart from "@/components/charts/SecondReportPie.vue";
import { useRoute } from "vue-router";
import communicationService from "../../services/communication/communicationservice";
import { computed, ref } from "vue";

export default {
  components: { ReportChart, SecondChart },

  setup() {
    const route = useRoute();
    const messages = ref([]);
    const units = route.query.units;
    const loading = ref(false);

    const getMessageReport = async () => {
      try {
          loading.value = true;
        const reportData = await communicationService.getMessageReport(
          route.params.messageId
        );
        messages.value = reportData;
      } catch (error) {
          loading.value = false;
        console.log(error);
      }
    };

    getMessageReport();

    const doSMSAnalysis = (allSMS) => {
      const chartData = [];
      const statuses = ["sent", "failed", "sms queued"];
      for (let status of statuses) {
          const count = allSMS.filter(i => i.deliveryReport === status).length;
        chartData.push({
          name: status.includes("queued") ? "queued" : status,
          y: +((count / allSMS.length) * 100).toFixed(2),
        });
      }
      return chartData;
    };

    const getSMSStats = (allSMS) => {
      const chartData = [];
      const statuses = ["sent", "failed", "sms queued"];
      for (let status of statuses) {
          const count = allSMS.filter(i => i.deliveryReport === status).length;
        chartData.push({
          name: status.includes("queued") ? "queued" : status,
          y: count,
        });
      }
      return chartData;
    };

    const chartData = computed(() => {
        const data = doSMSAnalysis(messages.value);
        return data;
    })

    const statsData = computed(() => {
        const data = getSMSStats(messages.value);
        console.log(data, "stats data");
        return data;
    })

    const finished = computed(() => {
        const unsent = messages.value.filter(i => i.deliveryReport === "sms queued").length;
        console.log(unsent, "unsent");
        if (unsent > 0) return false;
        return true;
    })

    return {
      messages,
      units,
      chartData,
      loading,
      finished,
      statsData,
    };
  },
};
</script>

<style scoped>
.back-icon {
  background: grey;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.status {
  background: grey;
  height: 30px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22px 0 0 22px;
}

.units-used {
  font-size: 30px;
}

.units-text {
  color: #0f529f;
  font-weight: 700;
}

.hidden-header {
  display: none;
}
</style>