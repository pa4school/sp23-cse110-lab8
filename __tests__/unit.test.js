// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2

/* isPhoneNumber tests */
// 2 true
test('isPhoneNumber valid with area code: (123) 456-7890', () => {
    expect(functions.isPhoneNumber(`(123) 456-7890`)).toBe(true)
})

test('isPhoneNumber invalid without area code: 456-7890', () => {
    expect(functions.isPhoneNumber(`456-7890`)).toBe(true)
})

// 2 false

test('isPhoneNumber invalid with 11 digits: 12345678901', () => {
    expect(functions.isPhoneNumber(`12345678901`)).toBe(false)
})

test('isPhoneNumber invalid with letters: 123-abc-7890', () => {
    expect(functions.isPhoneNumber(`123-abc-7890`)).toBe(false)
})


/* isEmail tests */
// 2 true
test('isEmail valid: abc@test.com', () => {
    expect(functions.isEmail(`abc@test.com`)).toBe(true)
})

test('isEmail valid with _ and: abc_123@test.com', () => {
    expect(functions.isEmail(`abc_123@test.com`)).toBe(true)
})

// 2 false
test('isEmail invalid without @: abctest.com', () => {
    expect(functions.isEmail(`abctest.com`)).toBe(false)
})

test('isEmail invalid without .com: abc@test', () => {
    expect(functions.isEmail(`abc@test`)).toBe(false)
})

/* isStrongPassword tests */
// 2 true
test('isStrongPassword valid with _: TesT_1234', () => {
    expect(functions.isStrongPassword(`TesT_1234`)).toBe(true)
})

test('isStrongPassword valid with numbers at end: Test123456789', () => {
    expect(functions.isStrongPassword(`Test123456789`)).toBe(true)
})

// 2 false
test('isStrongPassword invalid with 2 character: Te', () => {
    expect(functions.isStrongPassword(`Te`)).toBe(false)
})

test('isStrongPassword invalid with special character: Test1234!#@', () => {
    expect(functions.isStrongPassword(`Test1234!#@`)).toBe(false)
})


/* isDate tests */
// 2 true
test('isDate valid: 01/01/2023', () => {
    expect(functions.isDate(`01/01/2023`)).toBe(true)
})

test('isDate valid with 1 digit month: 1/01/2023', () => {
    expect(functions.isDate(`1/01/2023`)).toBe(true)
})

// 2 false
test('isDate invalid without /: 01012023', () => {
    expect(functions.isDate(`01012023`)).toBe(false)
})

test('isDate invalid with one digit day: 1/01/23', () => {
    expect(functions.isDate(`1/1/23`)).toBe(false)
})


/* isHexColor tests */
// 2 true
test('isHexColor valid: #FFF000', () => {
    expect(functions.isHexColor(`#FFF000`)).toBe(true)
})

test('isHexColor valid without #: FFF000', () => {
    expect(functions.isHexColor(`FFF000`)).toBe(true)
})

// 2 false
test('isHexColor invalid # in wrong place: FFF000#', () => {
    expect(functions.isHexColor(`FFF000#`)).toBe(false)
})

test('isHexColor invalid with 2 characters: #FFF0', () => {
    expect(functions.isHexColor(`#FF`)).toBe(false)
})