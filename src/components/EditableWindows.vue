<template>
  <transition-group tag="ul" class="editable-windows" name="show">
    <EditableWindow
      class="editable-windows__editable-window"
      tag="li"
      v-for="window in windows"
      v-show="!window.isRemoved"
      :key="window.id"
      :id="window.id"
      :initial-x="window.x"
      :initial-y="window.y"
      :initial-width="window.width"
      :initial-height="window.height"
      :name="window.name"
      :is-active="window.isActive"
      :content="window.content"
      :min-x="minX"
      :max-x="maxX"
      :min-y="minY"
      :max-y="maxY"
      :min-width="window.minWidth"
      :min-height="window.minHeight"
      @edit="onEdit"
      @start-dragging="onStartDragging"
      @end-dragging="onEndDragging"
      @start-resizing="onStartResizing"
      @end-resizing="onEndResizing"
    />
  </transition-group>
</template>

<script>
import EditableWindow from "./EditableWindow";

import {
  SET_ACTIVE_WINDOW,
  SET_WINDOW_POSITION_SIZE,
  EDIT_WINDOW
} from "../store/actions-types";

export default {
  name: "EditableWindows",
  components: {
    EditableWindow
  },
  computed: {
    windows() {
      return this.$store.getters.windows;
    }
  },
  mounted() {
    this.maxX = this.$el.offsetWidth;
    this.maxY = this.$el.offsetHeight;

    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onStartDragging(id) {
      this.$store.dispatch(SET_ACTIVE_WINDOW, { id });
    },
    onStartResizing(id) {
      this.$store.dispatch(SET_ACTIVE_WINDOW, { id });
    },
    onEndDragging(id, position) {
      this.$store.dispatch(SET_WINDOW_POSITION_SIZE, {
        id,
        ...position
      });
    },
    onEndResizing(id, positionAndSize) {
      this.$store.dispatch(SET_WINDOW_POSITION_SIZE, {
        id,
        ...positionAndSize
      });
    },
    onResize() {
      this.maxX = this.$el.offsetWidth;
      this.maxY = this.$el.offsetHeight;
    },
    onEdit(id) {
      this.$store.dispatch(EDIT_WINDOW, { id });
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  data() {
    return {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0
    };
  }
};
</script>

<style lang="scss">
.editable-windows {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;

  &__editable-window {
    &.show-enter-active,
    &.show-leave-active {
      transition: all 0.2s;
    }

    &.show-enter,
    &.show-leave-to {
      opacity: 0;
    }
  }
}
</style>
