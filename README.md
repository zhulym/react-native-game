### 1. В react-native нету тегов, есть компоненты, все блоки строятся с использованием `<View><View/>`

---

### 2. Для любого текста используем `<Text>Hello world!<Text/>`, для переноса текста на след строку символ переноса в фиг. скобках ===> `<Text>Hello {'\n'}world!<Text/>`

### 2.1. `<Text numberOfLines={2}> Hello world! <Text/>` ===> numberOfLines={2} ограничит текст двумя строками, остальные обрежутся

---

### 3. Компонент `<SafeAreaView><SafeAreaView/>` добавит отступы сверху от статусбара девайса и зоны расположения камеры (капля, бровь и т.д. в зависимости от конструкции)

---

### 4. Вместо `onClick` используем `onPress={() => console.log('')}`

---

### 5. Все кнопки `<Button title='Confirm' />` самозакрывающийся компонент, текст передаётся атрибутом

---

### 6. Дефолтные диалоговые окна через `Alert.alert` `Alert.prompt` см. доку
### 6.1. Компонент `<Modal />` для создания модалок

---

### 7. Изображения через компонент `<Image source={require('../../assets/icon.svg')} />` onPress на изображении не работает (нужно завернуть в

> `<TouchableHighlight> <TouchableHighlight />` и уже на него навесить `onPress`)
> или `<TouchableWithoutFeedback> <TouchableWithoutFeedback />` без какого либо эффекта на обёрнутом элементе см. доку.

---

### 8. Стили указываются атрибутом `style` куда пихаем объект со свойствами в камелКейс, сокр. запись не работает `border: 2px solid #ff0000` нужно расписывать по отдельности,

> - позиционирование `position: 'relative' либо  position: 'absolute'` только два, по дефолту стоит relative, absolute - от левоё верхней точки девайса над статусбаром
> - свойство контейнеру `flex: 1` растянет блок на всю ширину и высоту, если несколько дочерних блоков то им тоже можно дать `flex: 1` `flex: 2` `flex: 1`, здесь сработают как фракции(пропорции) второй блок будет в два раза больше чем первый и третий

---

### 9. Чтобы узнать андроид или айос, какая версия, телефон или планшет ===> `Platform.OS`, `Platform.Version`, `Platform.isPad`.

> `color: Platform.OS === 'ios' ? 'red' : 'green'`

---

### 10. Списки делаем через FlatList.

      `<FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />`

---

### 11. Вместо input ===> `<TextInput />`
      `<TextInput
        style={styles.input}
        onChangeText={onChange}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />`

---

### 12. Роутинг здесь https://reactnavigation.org/docs/getting-started/ + npm i @react-navigation/stack
> - в корне проекта создаём файл navigation.ts и там создаём роуты
---

### 13. Для создания форм можно использовать либу `Formik`

---

### 14.

---

### 15.

---

### 16.
