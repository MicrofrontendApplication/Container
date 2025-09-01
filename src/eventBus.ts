// src/shared/eventBus.ts
class EventBus extends EventTarget {
  emit(eventName: string, detail?: any) {
    this.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  on(eventName: string, callback: (event: CustomEvent) => void) {
    this.addEventListener(eventName, (e) => callback(e as CustomEvent));
  }

  off(eventName: string, callback: (event: CustomEvent) => void) {
    this.removeEventListener(eventName, callback as EventListener);
  }
}

export const eventBus = new EventBus();
