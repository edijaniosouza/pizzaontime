import { StyleSheet } from "react-native";

export const styleHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 5,
    backgroundColor: "#FFE0965F"
  },
  buttonsStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE096",
    paddingHorizontal: 100, // Ajustar
    marginVertical: 5,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF902C60",
    elevation: 5
  },
  btnText: {
    color: "#C83F3B",
    fontWeight: "bold",
    fontSize: 18
  },
  imgStyle: {
    width: 300,
    height: 300
  }
});


export const textInputStyle = StyleSheet.create({
  textInputLayout: {
    color: "black",
    textAlign: "left",
    backgroundColor: "#FFE096",
    width: 300,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#00000040",
    borderRadius: 5,
    padding: 16,
    marginBottom: 10
  }
});


export const stylesLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE0965F",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FFE096",
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 10,
    elevation: 10
  },
  buttonCadastrar: {
    alignItems: "center",
    backgroundColor: "#C83F3B",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 10,
    elevation: 10
  },
  buttonText: {
    color: "black",
    fontWeight: "bold"
  },
  buttonTextSignUp: {
    color: "white",
    fontWeight: "bold"
  },
  btnSignInWithNoAccount: {
    alignItems: "center",
    marginTop: 10
  },
  btnTextSignInWithNoAccount: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold"
  }
});

// Menu Screen


export const styleMenuScreen = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFE0965F"
  },
  menuRow: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  menuButton: {
    padding: 7,
    alignItems: "center",
    backgroundColor: "#C83F3B",
    borderRadius: 8,
    elevation: 5
  },
  menuButtonText: {
    color: "white",
    fontWeight: "bold"
  },
  menuButtonChecked: {
    padding: 7,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5
  },
  topicText: {
    color: "black",
    marginVertical: 6,
    marginHorizontal: 10,
    fontSize: 25
  }
});


export const styleMenuItem = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#C83F3B",
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    color: "white",
    marginHorizontal: 10
  },
  description: {
    fontSize: 12,
    color: "white",
    marginHorizontal: 10
  },
  image: {
    width: 70,
    height: 70,
    flex: 1,
    marginStart: 10,
    marginEnd: 5,
    marginVertical: 5
  }
});


export const styleMenuItemScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    color: "black",
    textAlign: "justify",
    fontSize: 15,
    margin: 10
  },
  textSubtitle: {
    color: "#C83F3B",
    fontSize: 24,
    margin: 10,
    fontWeight: "bold"
  },
  itemOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    backgroundColor: "#FFE0965F",
    borderRadius: 5,
    marginBottom: 2,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  itemOptionsText: {
    color: "black",
    fontSize: 16
  },
  btnAdd: {
    backgroundColor: "#C83F3B",
    margin: 5,
    padding: 10,
    borderRadius: 4
  },
  btnAddText:{
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    elevation: 4}
});
