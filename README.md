**git init**

**git remote add origin https://github.com/Thulir-Tech/salon-app.git**

**git fetch origin** (optional, but ensures you know what’s on remote)

**git checkout -b main origin/main** (if remote main exists; if not, just create main)

(If origin/main doesn't exist, skip pull; just work on local branch.)

**git pull origin main** (if main branch already exists on remote)

**git checkout -b username/dev**

Make changes, then:

**git add .**

**git commit -m "first commit"**

**git push -u origin username/dev**
