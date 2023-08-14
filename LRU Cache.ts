// export function spinWords(words: string): string {
//     //1.split words: words.split(' ')
//     //2.iterate through array
//   let reversedCharacters = reverseCharacters(words);

//   let reversedCharactersArray = reversedCharacters.split(" ");

//   let reversedWords = reversedCharactersArray.reverse();

//   let wordsArray = words.split(" ");

//   let joinedArray = joinArrays(wordsArray, reversedWords);

//   return joinedArray.join(" ");

//   function reverseCharacters(characters: string) {
//     let rS = "";
//     for (let i = characters.length - 1; i >= 0; i--) {
//       rS += characters[i];
//     }
//     return rS;
//   }

//   function joinArrays(fA: string[], rA: string[]) {
//     for (let i = 0; i < fA.length; i++) {
//       if (fA[i].length >= 5) {
//         fA[i] = rA[i];
//       }
//     }
//     return fA;
//   }
// }

// console.log(spinWords("The quick brown fox jumps over the lazy dog"));

// class LRUCache {
//   map: Map<number, number>;
//   capacity: number;
//   cache: number[];

//   constructor(capacity: number) {
//     this.map = new Map();
//     this.capacity = capacity;
//     this.cache = [];
//   }

//   get(key: number): number {
//     this.addKeyToCache(key);
//     return this.map.get(key) ?? -1;
//   }

//   put(key: number, value: number): Map<number, number> {
//     let keyExistsInMap = this.map.get(key);
//     let spaceAvailableInCache = this.map.size < this.capacity;

//     if (!keyExistsInMap && spaceAvailableInCache) {
//       this.map.set(key, value);
//       this.cache.unshift(key);
//     } else if (keyExistsInMap) {
//       this.map.set(key, value);
//       this.addKeyToCache(key);
//     } else {
//       this.map.delete(this.cache[this.cache.length - 1]);
//       this.cache.pop();
//       this.map.set(key, value);
//       this.cache.unshift(key);
//     }

//     return this.map;
//   }

//   addKeyToCache(key: number) {
//     let keyIndex = this.cache.indexOf(key);
//     if (keyIndex !== -1) {
//       let key = this.cache.splice(keyIndex, 1)[0];
//       this.cache.unshift(key);
//     }
//   }
// }
class LRUCache {
    capacity: number;
    map: Map<number, number>;
  
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }
  
    get(key: number): number {
      const value = this.map.get(key);
  
      if (value === undefined) return -1;
            
      // Small hack to re-order keys: we remove the requested key and place it at the end
      this.map.delete(key);
      this.map.set(key, value);
      
      return value;
    }
  
    put(key: number, value: number): void {
      // remove last element to avoid overflow, only if it does not have 
      // the inserted key is a new key
      if (this.map.size >= this.capacity && !this.map.has(key)) {
          const firstKey = this.map.keys().next().value;
          this.map.delete(firstKey);
      }
      
      // Small hack to re-order keys: we remove the requested key and place it at the end
      this.map.delete(key);
      this.map.set(key, value);
    }
  }

let lRUCache = new LRUCache(2);
console.log(lRUCache.put(2, 1));
console.log(lRUCache.put(1, 1));
console.log(lRUCache.put(2, 3));
console.log(lRUCache.put(4, 1));
console.log(lRUCache.get(1));
console.log(lRUCache.get(2));
console.log(lRUCache.get(1));
console.log(lRUCache.get(3));
console.log(lRUCache.get(4));
