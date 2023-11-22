<script setup lang="ts">
const { result } = await useLoader('foo');
if (result.value?.id != null) {
  const foo = result.value.id; // const foo: string | number | boolean | QueryValue[] | Record<string, any> | QueryValue[]
}
</script>

<template>
  <div>
    <h1>Foo</h1>
    {{ result.id }}
    <!-- possibly null -->
  </div>
</template>
