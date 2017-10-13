def validPhoneNUmber(phoneNumber)
    if phoneNumber.length != 14
        return false
    end
    if phoneNumber[0] != "("
        return false
    elsif phoneNumber[4] != ")"
        return false
    elsif phoneNumber[5] != " "
        return false
    elsif phoneNumber[9] != "-"
        return false
    end
    true
end

p validPhoneNUmber("(305) 755-7663")