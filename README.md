# typescript-tutorial

```typescript
export const tutorial = () => {
  // 基本的な型の例
  const personName: string = "Mike"; // string
  const personAge: number = 30; // string
  const studentStatus: boolean = false; // boolean
  const interests: string[] = ["reading", "painting", "coding"]; // boolean
  const residence: object = {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  }; // object
  const currentDate: Date = new Date(); // Date
  const emptyValue: null = null; // null
  const undefinedValue: undefined = undefined; // undefined
  const miscellaneous: any = "Hello World"; // any
  const sex: "male" | "female" = "male"; // union
  const mixedValue: string | number | null = "Hello World"; // union

  // 基本的な型の出力
  console.log(`Name: ${personName}`);
  console.log(`Age: ${personAge}`);
  console.log(`Is Student: ${studentStatus}`);
  console.log(`Hobbies: ${interests}`);
  console.log(`Address: ${JSON.stringify(residence)}`);
  console.log(`Today: ${currentDate.toISOString()}`);
  console.log(`None: ${emptyValue}`);
  console.log(`Not Defined: ${undefinedValue}`);
  console.log(`Random: ${miscellaneous}`);
  console.log(`Gender: ${sex}`);
  console.log(`Value: ${mixedValue}`);

  // 関数の例：配列を反転する関数
  const reverseArray = (arr: string[], includeTom?: boolean): string[] => {
    const reversed: string[] = arr.slice().reverse();
    if (includeTom) {
      reversed.push("Tom");
    }
    return reversed;
  };

  console.log(reverseArray(["a", "b", "c"])); // => ["c", "b", "a"]
  console.log(reverseArray(["a", "b", "c"], true)); // => ["c", "b", "a", "Tom"]

  // インターフェースの例
  interface UserProps {
    userId: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
  }

  interface AdminUserProps extends UserProps {
    role: "admin" | "leader" | "manager";
  }

  // オブジェクトの例
  const sampleUser: UserProps = {
    userId: 1,
    name: "Mike",
    age: 30,
    email: "mike@gmail.com",
    isActive: true,
  };

  // 関数の例：ユーザー登録
  const registerUser = (userInfo: UserProps): void => {
    console.log(`Registering user: ${userInfo.name}`);
  };

  registerUser(sampleUser);

  // 管理者ユーザーの例
  const adminUser: AdminUserProps = {
    ...sampleUser,
    role: "admin",
  };

  console.log(`Admin user: ${adminUser.name}, Role: ${adminUser.role}`);

  // クラスの例
  class Person {
    constructor(
      public userId: number,
      public name: string,
      public age: number,
      public email: string,
      public isActive: boolean
    ) {}

    getProfile(): string {
      return `User ID: ${this.userId}, Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, isActive: ${this.isActive}`;
    }
  }

  const newUser = new Person(2, "Jane", 25, "jane@gmail.com", true);
  console.log(newUser.getProfile());
};

// チュートリアルの実行
tutorial();
```
# typescript-tutorial
# typescript-tutorial
