import scrypt

def hash_password(password: str, salt: bytes) -> bytes:
    return scrypt.hash(password=password.encode(), salt=salt)

def check_password(hashed_password: bytes, password: str) -> bool:
    try:
        scrypt.verify(password.encode(), hashed_password)
        return True
    except scrypt.error:
        return False

def create_user(username: str, password: str):
    salt = scrypt.gensalt()
    hashed_password = hash_password(password, salt)
    # Save the username, salt, and hashed password to a database or file.

def authenticate_user(username: str, password: str):
    # Retrieve the salt and hashed password for the given username from the database or file.
    if check_password(hashed_password, password):
        # Authentication succeeded.
        print("User is authenticated.")
    else:
        # Authentication failed.
        print("Username or password is incorrect.")
