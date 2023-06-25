<script setup>
const startText = "hi, i'm matías";

let startTextArray = startText.split("");

const roles = [
  "developer",
  "student",
  "engineer",
  "passionate",
  "human",
  "dreamer",
];
for (let i = roles.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [roles[i], roles[j]] = [roles[j], roles[i]];
}

let rolesArray = roles.map((role) => role.split(""));
</script>

<template>
  <div id="start">
    <div style="height: 100vh" class="center flex-column">
      <div class="heroest">
        <p
          v-for="(letter, index) in startTextArray"
          :key="index"
          class="start-letter-span"
        >
          {{ letter === " " ? "&nbsp;" : letter }}
        </p>
      </div>
      <div class="w-100 center" style="height: 2.5em">
        <div
          v-for="(roleArray, index) in rolesArray"
          :key="index"
          class="position-absolute role-title"
        >
          <p v-for="(letter, index) in roleArray" :key="index">
            {{ letter === " " ? "&nbsp;" : letter }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
